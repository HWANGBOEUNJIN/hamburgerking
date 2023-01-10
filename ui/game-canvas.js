
import Background from "../background.js";
import Igdslot from "../igdslot.js";
import Box from "../box.js";
import Tray from "../tray.js";
import Igd from "../igd.js";
import Food from "../food.js";
import Heart from "../heart.js";
import Customer from "../customer.js";


export default class GameCanvas {

#obj;
#background;
#igd;
#igdslot;
#box;
#tray;
#ingres;
#food;
#delayIndex;
#heart;
#customer;
#speed;

#stage;
#directionAudio;
#volume;
#isRunning;
#timerId;


constructor() {

    this.#obj = document.querySelector("#game-canvas");

    this.#obj.onkeydown = this.keyDownHandler.bind(this);

    this.#background = new Background();
    this.#igd = new Igd();
    this.#igdslot = new Igdslot();
    this.#box = new Box();//선택하는 재료 보여주는 박스 

    this.#tray = new Tray();
    this.#ingres = [];//쌓는 재료 배열
    this.#food = new Food();//정답 햄버거
    this.#customer = new Customer();//손님
    this.#speed = 1;
    this.#stage = 1;

    //생명
    this.#heart = new Heart();
    //성공/실패 후 새 판 갈기 전 딜레이 시간 
    this.#delayIndex = 0;
    this.#volume=1;
    
    this.#timerId = 0;
    this.#isRunning = true;
}

init() {
    this.#ingres = [];
    this.#food.init();
    this.#box.init();
    this.#tray.init();
}

keyDownHandler(e) {
    //console.log(e.code);
    //오디오 폴더에 mp3추가
    //방향키 소리
    this.#directionAudio = new Audio(); // Aduio 객체 생성
    this.#directionAudio.src = "audio/direction.mp3";
    this.#directionAudio.volume=this.#volume;

    switch (e.code) {
        
        case "ArrowLeft":
            this.#box.move("Left");
            this.#directionAudio.play();
            break;

        case "ArrowRight":
            this.#box.move("Right");
            this.#directionAudio.play();
            break;

        case "ArrowUp":
            this.#box.move("Up");
            break;

        case "ArrowDown":
            this.#box.move("Down");
            break;

        case "Space":
            var ingre = this.#igdslot.make(this.#box.ingreIndex,this.#stage);//쌓는 재료 객체 생성

            ingre.x = this.#tray.x + 200;
            this.#ingres.push(ingre);

            //food와 비교
            this.#food.check(ingre.index,this.#volume);//space 누를 때마다 정답과 맞는지 체크

            //생명
            if (this.#food.answerStat == "fail") {
                this.#heart.heartIndex--;
            }

            //***성공시 맞춘개수 증가 
            else if (this.#food.answerStat == "success")
                this.#heart.count++;

            break;
    }
}

stageSet(){//stageSet 해도 푸드 업뎃 안됨 -> 수정!!!

    this.#background.stage = this.#stage;
    this.#box.stage = this.#stage;
    // this.#button.stage = this.#stage;
    this.#customer.stage = this.#stage;
    this.#food.stage = this.#stage;
    this.#heart.stage = this.#stage;
    this.#igd.stage = this.#stage;
    this.#tray.stage = this.#stage;
    // this.#igdslot.stage = this.#stage;
    
}

pause(){
    this.#isRunning = false;////////////////////////////
}

run() {
    //ctx & 화면 지우기
    var ctx = this.#obj.getContext("2d");
    ctx.clearRect(0, 0, this.#obj.width, this.#obj.height);
    
    //상태변경
    this.#box.update();
    for (var i of this.#ingres) {
        i.update(this.#speed);
    }
    this.#tray.update(this.#speed);

    //그림 그리기
    this.#background.draw(ctx);
    this.#heart.draw(ctx, this.#heart.heartIndex);
    this.#customer.draw(ctx, this.#customer.index);
    this.#tray.draw(ctx);
    // this.#igdslot.draw(ctx);
    this.#box.draw(ctx);
    this.#food.draw(ctx);

    //재료 간격 두고 쌓기
    // if(this.#stage ==1)
    //     var temp = 830;
    // else if(this.#stage ==2 || this.#stage ==3)
    //     var temp = 700;

    var temp = 830;
    for (var i of this.#ingres) {
        i.draw(ctx, temp);
        temp -= 20;
    }

    this.#food.drawEffect(ctx);

    //***트레이가 지나가도 하트가 깎이도록
    if (this.#tray.x < -380) {
        this.#heart.heartIndex--;
        this.init();
    }

    // //조건 : index 배열 일치 && 윗빵 내려와서 멈춤
    //실패/성공 화면 내보내고 일정 시간 후 캔버스 갈기
    if (this.#food.answerStat != "default") {
        this.#delayIndex++;

        if (this.#delayIndex % 40 == 0) {
            this.init();
            this.#customer.index++;

            if (this.#customer.index == 10)
                this.#customer.index = 0;
        }
    }

    //gameover, levelup시 화면 바꾸기
    if(this.#heart.heartIndex == 0){
        this.#stage = 1;
        this.stageSet(); 
        this.onGameOver();
        this.#heart.heartIndex = 3;
        this.#heart.count = 0;
    }
    if(this.#heart.count == 4){
        this.#heart.heartIndex = 3;
        this.#stage++; //if문 안에서 complete하려고 밖으로 뺌
        if(this.#stage <= 3){//2였는데 최종장 더하려고 3으로 바꿈//////////////////////////////
            this.stageSet();
            this.onLevelUp();
            this.#heart.count = 0;
        }
        if(this.#stage == 4){
            this.#stage = 1;
            this.stageSet();
            this.onComplete();
            this.#heart.count = 0;
        }

    }

    if(this.#isRunning == false){
        clearTimeout(this.#timerId);//
        return;//함수 벗어나게
    }

    this.#timerId = setTimeout(this.run.bind(this), 17);
}

get obj() {
    return this.#obj;
}
setEffVolume(volume){
    this.#volume=volume;
}

set isRunning(isRunning){
    this.#isRunning = isRunning;
}

}