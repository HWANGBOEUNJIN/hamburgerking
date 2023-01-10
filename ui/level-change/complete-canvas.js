import Button from "../../button.js";

export default class CompleteCanvas {
    #x;
    #y;
    #delay;
    #fireworkImg;
    #isRunning;
    #timerId;
    #obj;
    #background;
    #button;


    constructor() {
        this.#x = 0;
        this.#y = 0;
        this.#delay = 0;

        this.#obj = document.querySelector("#complete-canvas");
        this.#obj.focus();
        this.#obj.onclick = this.clickHandler.bind(this);
        this.#background = document.getElementById("complete");
        this.#fireworkImg = document.getElementById("firework");

        this.#button = new Button();

        this.#timerId = 0;///////////////////////////
        this.#isRunning = true;/////////////////////

    }

    pause() {
        this.#isRunning = false;////////////////////////////
    }


    run() {
        var ctx = this.#obj.getContext("2d");
        ctx.drawImage(this.#background,
            0, 0, this.#background.width, this.#background.height,
            0, 0, 900, 1200);
        this.#button.drawReturn(ctx);

        if (this.#isRunning == false) {
            clearTimeout(this.#timerId);
            return;//함수 벗어나게
        }


    }

    clickHandler(e) {
        let r = this.#button.rw;
        let x = this.#button.returnX;
        let y = this.#button.returnY;

        if (e.x > x && e.x < x + r && e.y > y && e.y < y + r)
            this.onclickReturn();

    }
    
    get obj() {
        return this.#obj;
    }

}