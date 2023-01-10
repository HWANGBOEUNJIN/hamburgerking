import Button from "../../button.js";

export default class LevelUpCanvas {
    #obj;
    #background;
    #button;
    
    constructor() {

        // this.#obj = document.getElementById("levelup-canvas");
        this.#obj = document.querySelector("#levelup-canvas");
        this.#obj.focus();

        this.#obj.onclick = this.clickHandler.bind(this);

        this.#background = document.getElementById("levelup-back");
        this.#button = new Button();
    }

    run() {
        var ctx = this.#obj.getContext("2d");
        ctx.drawImage(this.#background,
            0, 0, this.#background.width, this.#background.height,
            0, 0, 900, 1200);
        this.#button.drawNext(ctx);
    }

    clickHandler(e) {

        let r = this.#button.rw;
        let x = this.#button.nextX;
        let y = this.#button.nextY;

        // console.log(e.x,e.y);

        if (e.x > x && e.x < x + r && e.y > y && e.y < y + r)
            this.onclickNext();

    }
    get obj(){
        return this.#obj;
    }

}