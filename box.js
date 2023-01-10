import Igdslot from "./Igdslot.js";
import Igd from "./Igd.js";

export default class Box {

    #x;
    #y;
    #img;
    #ingreIndex;
    #start;
    #gap;

    #stage;

    #ind_x;
    #ind_y;



    constructor(x = 0, y = 1200 - 160) {//x||320, y||610 말고
        this.#stage = 1;

        this.#x = x;
        this.#y = y;

        this.#img = document.getElementById("box");

        this.#ind_x = 0;
        this.#ind_y = 1;

        this.#ingreIndex = 0; // ingnum -> ingreIndex

        this.#start = 10;
        this.#gap = 180;//canvas.width/5한 값

    }

    init() {/////////여기 바꿈 
        // console.log("box stage: "+this.#stage);
        this.#x = 0;
        this.#y = 1200 - 160;
        this.#ind_x = 0;//레벨업 후 박스 안움직이고 space 누르면 빵 나오는 문제
        this.#ind_y = 1;///부작용 없나 보기(재플레이 할 때 박스 위로 안올라가게)

        this.#ingreIndex = 0; // ingnum -> ingreIndex
    }

    draw(ctx) {
        ctx.drawImage(this.#img,
            0, 0, this.#img.width, this.#img.height,
            this.#x, this.#y, 160, 160)
    }

    move(dir) {
        if (this.#stage == 1) {
            switch (dir) {
                case "Left":
                    this.#ingreIndex--;
                    if (this.#ingreIndex < 0)//캔버스 벗어나지 않게
                        this.#ingreIndex = 0;
                    break;
                case "Right":
                    this.#ingreIndex++;
                    if (this.#ingreIndex > 4)//캔버스 벗어나지 않게
                        this.#ingreIndex = 4;
                    break;
            }
        }

        else if (this.#stage == 2) {

            switch (dir) {

                case "Left":

                    if (this.#ind_x <= 0)
                        this.#ind_x = 0
                    else
                        this.#ind_x--;
                    break;

                case "Right":

                    if (this.#ind_x >= 4)
                        this.#ind_x = 4

                    else if (this.#ind_x == 2 && this.#ind_y == 0) {
                        this.#ind_x = 2
                        this.#ind_y = 0
                    }

                    else
                        this.#ind_x++;
                    break;

                case "Up":

                    // console.log("----------------ss"+this.#ind_x,this.#ind_y);

                    if (this.#ind_x == 3 && this.#ind_y == 1) {
                        this.#ind_x = 3
                        this.#ind_y = 1
                    }

                    else if (this.#ind_x == 4 && this.#ind_y == 1) {
                        this.#ind_x = 4
                        this.#ind_y = 1
                    }
                    else
                        this.#ind_y = 0
                    break;

                case "Down":
                    this.#ind_y = 1
                    break;
            }

            this.setIndex();

        }


        ///////////////////////////////3단계

        else if (this.#stage == 3) {

            switch (dir) {

                case "Left":
                    // console.log("leftleft");
                    if (this.#ind_x <= 0)
                        this.#ind_x = 0
                    else
                        this.#ind_x--;
                    break;

                case "Right":
                    if (this.#ind_x >= 4)
                        this.#ind_x = 4
                    else
                        this.#ind_x++;
                    break;

                case "Up":
                    this.#ind_y = 0
                    break;

                case "Down":
                    this.#ind_y = 1
                    break;
            }

            this.setIndex();

        }

    }

    setIndex() {
        //각 재료가 갖는 인덱스 ingreIndex
        if (this.#ind_y == 1 && this.#ind_x == 0)
            this.#ingreIndex = 0

        else if (this.#ind_y == 1 && this.#ind_x == 1)
            this.#ingreIndex = 1

        else if (this.#ind_y == 1 && this.#ind_x == 2)
            this.#ingreIndex = 2
        else if (this.#ind_y == 1 && this.#ind_x == 3)
            this.#ingreIndex = 3
        else if (this.#ind_y == 1 && this.#ind_x == 4)
            this.#ingreIndex = 4



        else if (this.#ind_y == 0 && this.#ind_x == 0)
            this.#ingreIndex = 5
        else if (this.#ind_y == 0 && this.#ind_x == 1)
            this.#ingreIndex = 6
        else if (this.#ind_y == 0 && this.#ind_x == 2)
            this.#ingreIndex = 7
        else if (this.#ind_y == 0 && this.#ind_x == 3)
            this.#ingreIndex = 8
        else if (this.#ind_y == 0 && this.#ind_x == 4)
            this.#ingreIndex = 9


        // console.log("xx,yy,index"+this.#ind_x,this.#ind_y,this.#ingreIndex);

    }

    update() {

        //console.log("=========stage="+this.#stage);

        //박스 위치 지정/this.#start : 시작점/this.#gap : 움직임 간격
        if (this.#stage == 1)
            this.#x = this.#start + this.#gap * this.#ingreIndex;
        else if (this.#stage == 2 || this.#stage == 3)
            this.#x = this.#start + this.#gap * this.#ind_x;

        if (this.#ind_y == 0)
            this.#y = 900;
        else if (this.#ind_y == 1)
            this.#y = 1200 - 160;

    }

    get ingreIndex() {
        return this.#ingreIndex;
    }
    set ingreIndex(ingreIndex) {
        this.#ingreIndex = ingreIndex;
    }
    set stage(stage) {
        this.#stage = stage;
    }

    // #img
}
