import Button from "../../button.js";

export default class IntroCanvas {

    #mainAudio;
    #isRunning;
    #timerId;
    #background;
    #obj;
    #button;

    constructor() {

        this.#obj = document.getElementById("intro-canvas");
        this.#obj.focus();

        this.#obj.onclick = this.clickHandler.bind(this);

        this.#background = document.getElementById("intro-back");
        this.#button = new Button();

        //배경음
        this.#mainAudio = new Audio(); // Aduio 객체 생성
        this.#mainAudio.src = "audio/main.mp3";

        this.#obj.onclick = this.clickHandler.bind(this);
        this.#timerId = 0
        this.#isRunning = true;


    }


    draw() {
        var ctx = this.#obj.getContext("2d");
        ctx.drawImage(this.#background,
            0, 0, this.#background.width, this.#background.height,
            0, 0, 900, 1200);
        this.#button.drawIntro(ctx);
    }

    pause() {
        this.#isRunning = false;
    }

    run() {

        if (this.#isRunning == false) {
            clearTimeout(this.#timerId);//
            return;//함수 벗어나게
        }

        this.#timerId = setTimeout(() => {

            this.draw();
            this.run();

        }, 17);

    }

    clickHandler(e) {
        // console.log(e.x, e.y);
        let x = this.#button.x;
        let y = this.#button.y;

        let bw = this.#button.bw;
        let bh = this.#button.bh;
        let yGap = this.#button.yGap;

        let ow = this.#button.ow;
        let oh = this.#button.oh;

        if (e.x > x && e.x < x + bw && e.y > y && e.y < y + bh) {
            this.onclickStart();
            this.#mainAudio.loop = true;
            this.#mainAudio.play();
        }

        else if (e.x > x && e.x < x + bw && e.y > y + yGap && e.y < y + yGap + bh)
            this.onclickHowto();
        else if (e.x > x && e.x < x + bw && e.y > y + yGap * 2 && e.y < y + yGap * 2 + bh)
            this.onclickDev();
        else if (e.x > 700 && e.x < 700 + ow && e.y > 1000 && e.y < 1000 + oh)
            this.onclickOption();
    }

    setMainVolume(volume) {
        this.#mainAudio.volume = volume;
    }

    get obj(){
        return this.#obj;
    }

    set isRunning(isRunning){
        this.#isRunning = isRunning;
    }

    get mainAudio(){
        return this.#mainAudio;
    }

    set mainAudio(mainAudio){
        this.#mainAudio = mainAudio;
    }


}