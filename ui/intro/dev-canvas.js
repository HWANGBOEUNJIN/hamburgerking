import Button from "../../button.js";

export default class DevCanvas {
    #obj;
    #button;
    #background;

    constructor() {

        this.#obj = document.getElementById("dev-canvas");
        this.#obj.focus();

        this.#obj.onclick = this.clickHandler.bind(this);

        this.#background = document.getElementById("dev-back");
        this.#button = new Button();
    }


    run() {


        var ctx = this.#obj.getContext("2d");
        ctx.drawImage(this.#background,
            0, 0, this.#background.width, this.#background.height,
            0, 0, 900, 1200);
        this.#button.drawReturn(ctx);
    }

    clickHandler(e) {

        let r = this.#button.rw;
        let x = this.#button.returnX;
        let y = this.#button.returnY;

        // console.log(e.x,e.y);

        if (e.x > x && e.x < x + r && e.y > y && e.y < y + r)
            this.onclickReturn();

    }

        
    get obj() {
        return this.#obj;
    }

}