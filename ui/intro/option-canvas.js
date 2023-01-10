import Button from "../../button.js";

export default class OptionCanvas {
    #obj;
    #background;
    #button;
    #BgmIndex;
    #EffIndex;

    constructor() {

        this.#obj = document.getElementById("option-canvas");
        this.#obj.focus();

        this.#obj.onclick = this.clickHandler.bind(this);

        this.#background = document.getElementById("option-back");
        this.#button = new Button();

        this.#BgmIndex = 0; //Intro&main
        this.#EffIndex = 0; //effect

    }

    run() {

        var ctx = this.#obj.getContext("2d");
        ctx.drawImage(this.#background,
            0, 0, this.#background.width, this.#background.height,
            0, 0, 900, 1200);
        this.#button.drawReturn(ctx);
        this.#button.drawOption(ctx, this.#BgmIndex);
        this.#button.drawEffOption(ctx, this.#EffIndex);

        setTimeout(this.run.bind(this), 17);
    }

    clickHandler(e) {
        var ctx = this.#obj.getContext("2d");
        // let cw = this.button.check.width;
        // let ch = this.button.check.height;
        // let qw = this.button.quit.width;
        // let qh = this.button.quit.height;

        let r = this.#button.rw;
        let x = this.#button.returnX;
        let y = this.#button.returnY;

        //check, quit 누르면 설정 저장/취소 되게
        //볼륨 컨트롤 마우스로 눌러서 움직일 수 있게
        // 마우스 움직임 따라서 음량 조절되게

        //intro&main
        if (e.x >= 280 && e.x <= 330 && e.y >= 490 && e.y <= 560) {
            this.#BgmIndex = 5;
            this.onVolumeClick(0);
        }
        if (e.x >= 330 && e.x <= 400 && e.y >= 490 && e.y <= 560) {
            this.#BgmIndex = 4;
            this.onVolumeClick(0.2);
        }
        if (e.x >= 400 && e.x <= 480 && e.y >= 490 && e.y <= 560) {
            this.#BgmIndex = 3;
            this.onVolumeClick(0.4);
        }
        if (e.x >= 480 && e.x <= 560 && e.y >= 490 && e.y <= 560) {
            this.#BgmIndex = 2;
            this.onVolumeClick(0.6);
        }
        if (e.x >= 560 && e.x <= 640 && e.y >= 490 && e.y <= 560) {
            this.#BgmIndex = 1;
            this.onVolumeClick(0.8);
        }
        if (e.x >= 640 && e.x <= 720 && e.y >= 490 && e.y <= 560) {
            this.#BgmIndex = 0;
            this.onVolumeClick(1);
        }


        //효과음 조절
        if (e.x >= 280 && e.x <= 330 && e.y >= 650 && e.y <= 720) {
            this.#EffIndex = 5;
            this.onEffVolumeClick(0);
        }
        if (e.x >= 330 && e.x <= 400 && e.y >= 650 && e.y <= 720) {
            this.#EffIndex = 4;
            this.onEffVolumeClick(0.2);
        }
        if (e.x >= 400 && e.x <= 480 && e.y >= 650 && e.y <= 720) {
            this.#EffIndex = 3;
            this.onEffVolumeClick(0.4);
        }
        if (e.x >= 480 && e.x <= 560 && e.y >= 650 && e.y <= 720) {
            this.#EffIndex = 2;
            this.onEffVolumeClick(0.6);
        }
        if (e.x >= 560 && e.x <= 640 && e.y >= 650 && e.y <= 720) {
            this.#EffIndex = 1;
            this.onEffVolumeClick(0.8);
        }
        if (e.x >= 640 && e.x <= 720 && e.y >= 650 && e.y <= 720) {
            this.#EffIndex = 0;
            this.onEffVolumeClick(1);
        }

        if (e.x > x && e.x < x + r && e.y > y && e.y < y + r)
            this.onclickReturn();

    }

    get obj() {
        return this.#obj;
    }


}