
export default class Food {

    #foodList;//문제 한개씩 담길 배열
    // #foodLists; 
    #ingreList; //재료 쌓으면서 넣을 배열
    #answerStat;
    #successImg;
    #failImg;
    #foodImg;
    #foodImg2;
    #breadImg;
    #successAudio;
    #failAudio;

    #stage;

    #answerLists;  //문제담겨있는 배열 문제 4개 
    #answerLength;


    constructor() {

        this.#stage = 1;

        this.#answerLists = [[], [], []];
        // this.#answerLists[0] = [[0]];
        // this.#answerLists[1] = [[0]];
        // this.#answerLists[2] = [[0]];

        this.#answerLists[0] = [[3, 2, 1, 4, 0], [4, 3, 3, 1, 0], [2, 1, 2, 4, 0], [1, 3, 2, 2, 0],[1,4,3,2,0],[2,3,4,2,0],[3,1,1,2,0]];
        this.#answerLists[1] = [[1, 2, 3, 7, 0], [4, 7, 5, 6, 0], [1, 4, 2, 7, 0],[5, 2, 3, 5, 0], [2, 7, 5, 6, 0], [3, 6, 2, 1, 0]];
        this.#answerLists[2] = [[8, 9, 1, 2, 0], [9, 3, 7, 4, 0], [5, 6, 3, 8, 0], [2, 3, 7, 5, 0], [2, 4, 7, 8, 0], [3, 3, 5, 4, 0], [5, 7, 3, 8, 0]];

        // let i = Math.floor(Math.random() * (this.#answerLists[this.#stage - 1].length));
        // this.#foodList = this.#answerLists[this.#stage - 1][i];

        this.#foodList = [];
        this.#answerLength = 5;


        //foodList 랜덤하게 만들어주기 (재료 4개 랜덤, 맨 위는 빵)
        for(var k; k<this.#answerLength-1; k++){
            let j = Math.floor(Math.random()*4)+1;//0은 안나오게 1~4
            this.#foodList.push(j);
        }
        this.#foodList.push(0);

        this.#ingreList = [];

        this.#answerStat = "default";

        this.#foodImg = document.getElementById("tong");
        this.#foodImg2 = document.getElementById("tong2");
        this.#breadImg = document.getElementById("bread-under");

        this.#successImg = document.getElementById("success");
        this.#failImg = document.getElementById("fail");

        //성공 소리
        this.#successAudio = new Audio(); // Aduio 객체 생성
        this.#successAudio.src = "audio/success.mp3";
        
        //실패 소리
        this.#failAudio = new Audio(); // Aduio 객체 생성
        this.#failAudio.src = "audio/fail.mp3";

    }

    init() {        
        // let i = Math.floor(Math.random() * (this.#answerLists[this.#stage - 1].length));
        // this.#foodList = this.#answerLists[this.#stage - 1][i];

        //foodList 랜덤하게 만들어주기 (재료 4개 랜덤, 맨 위는 빵)

        this.#foodList.splice(0, this.#foodList.length);

        // console.log("stage: "+this.#stage);
        
        if (this.#stage == 1){
            
            for(var k=0; k<this.#answerLength-1; k++){
                let j = Math.floor(Math.random()*4)+1;//0은 안나오게 1~4
                this.#foodList.push(j);
            }
            this.#foodList.push(0);
        }

        else if (this.#stage == 2){
            for(var k=0; k<this.#answerLength-1; k++){
                let j = Math.floor(Math.random()*7)+1;//0은 안나오게 1~7
                this.#foodList.push(j);
            }
            this.#foodList.push(0);
        }
        else if (this.#stage == 3){
            for(var k=0; k<this.#answerLength-1; k++){
                let j = Math.floor(Math.random()*9)+1;//0은 안나오게 1~9
                this.#foodList.push(j);
            }
            this.#foodList.push(0);
        }

        // console.log(this.#foodList);
        
        this.#ingreList = [];
        this.#answerStat = "default";
    }

    draw(ctx) {
        // let i = this.#customerCount;

        //완성본 이미지 키오스크에 띄우기
        let fw = this.#foodImg.width / 5;
        let fw2 = this.#foodImg2.width / 5;
        let fh2 = this.#foodImg2.height / 2;
        
        //키오스크 화면 좌표
        let kx = 40;
        let ky = 350;

        //아래빵 그리기(tong과 크기 달라서 x좌표 다르게 설정)
        ctx.drawImage(this.#breadImg,
            0, 0, this.#breadImg.width, this.#breadImg.height,
            kx + 30, ky + 20, 200, 150)

        //빵윗재료 그리기
        if (this.#stage == 1) {
            for (var i in this.#foodList) {
                ctx.drawImage(this.#foodImg,
                    fw * this.#foodList[i], 0, 200, 162,
                    kx, ky - 20 * i, 250, 150)
            }
        }

        else {
            for (var i in this.#foodList) {
                if (this.#foodList[i] <= 4)
                    ctx.drawImage(this.#foodImg2,
                        fw2 * this.#foodList[i], fh2, fw2, fh2,
                        kx + 10, ky - 30 * i, 250, 150)

                else if (5 <= this.#foodList[i] <= 9)
                    ctx.drawImage(this.#foodImg2,
                        fw2 * (this.#foodList[i] - 5), 0, fw2, fh2,
                        kx + 10, ky - 30 * i, 250, 150)
            }

        }

    }


    drawEffect(ctx) {
        //이미지+볼륨
        if (this.#answerStat == "fail") {
            ctx.drawImage(this.#failImg,
                150, 300)
        }
        else if (this.#answerStat == "success") {
            ctx.drawImage(this.#successImg,
                150, 300)
        }
    }

    check(index,volume) {

        this.#ingreList.push(index)
        let checkNum = 0;

        //실패(하나씩 비교)
        for (var i in this.#ingreList) {
            if (this.#ingreList[i] == this.#foodList[i])
                checkNum++;
            else if (this.#ingreList[i] != this.#foodList[i]) {
                this.#answerStat = "fail";//정답상태값 변경
                this.#failAudio.volume = volume;
                this.#failAudio.play();
                break;
            }
        }

        //성공(다 쌓았을 때)
        if (this.#foodList.length == checkNum){
            this.#answerStat = "success";//정답상태값 변경
            this.#successAudio.volume = volume;
            this.#successAudio.play();
        }


    }

    get answerStat() {
        return this.#answerStat;
    }

    set answerStat(answerStat) {
        this.#answerStat = answerStat;
    }

    set stage(stage) {
        this.#stage = stage;
    }

}

