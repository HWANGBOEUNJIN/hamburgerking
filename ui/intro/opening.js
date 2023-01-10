//새 캔버스 추가 intro intro
export default class OpeningCanvas {

    #obj;
    #background;

    #introAudio;
    #isRunning;
    #timerId;


    constructor() {

        //app이랑 html에 캔버스 추가
        this.#obj = document.getElementById("opening-canvas");
        this.#obj.focus();

        //이미지
        this.background = document.getElementById("opening");
        // this.button = new Button();

        //오디오 폴더에 mp3추가
        this.#introAudio = new Audio(); // Aduio 객체 생성
        this.#introAudio.src = "audio/intro.mp3";


        this.#obj.onclick = this.clickHandler.bind(this);

        this.#timerId = 0;//////////////////////////
        this.#isRunning = true;/////////////////////

    }

    draw() {

        var ctx = this.#obj.getContext("2d");

        ctx.drawImage(this.background,
            0, 0, this.background.width, this.background.height,
            0, 0, 900, 1200);

    }

    clickHandler(e) {
        this.#introAudio.play();
        this.onclickIntro();

    }

    pause() {
        this.#isRunning = false;////////////////////////////
    }
    pause() {

        if (this.timerId) {//timerId가 없을걸 대비해서. 있다라는거 자체가 참
            clearTimeout(this.timerId);
            this.#introAudio.pause();
        }

    }
    run() {
        if (this.#isRunning == false) {////////////////////////////////
            clearTimeout(this.#timerId);//
            this.#introAudio.pause();
            return;//함수 벗어나게
        }

        this.timerId = setTimeout(() => {
            this.draw();
            this.run();

        }, 17);
        //알람취소
    }

    //인트로 볼륨 조절
    setIntroVolume(volume) {
        this.#introAudio.volume = volume;
    }

    set isRunning(isRunning) {///////////////////////////////
        this.#isRunning = isRunning;
    }

    get obj() {
        return this.#obj;
    }

    get introAudio(){
        return this.#introAudio;
    }

    set introAudio(introAudio){
        this.#introAudio = introAudio;
    }

}