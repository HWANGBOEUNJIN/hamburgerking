export default class Igd {

    #x;
    #y;
    #index;
    #img;
    #img2
    #width;
    #width2;
    #height2;
    #speedy
    #stage;


    constructor(ingreIndex, stage, x = 430, y = 550) {
        this.#stage = stage;

        this.#x = x;
        this.#y = y;
        this.#index = ingreIndex;

        this.#speedy = 10;
        // this.#speedx = 2;//tray.speed랑 맞춰줘야 함

        this.#img = document.getElementById("tong");
        this.#img2 = document.getElementById("tong2");

        this.#width = this.#img.width / 5;
        this.#width2 = this.#img2.width / 5;
        this.#height2 = this.#img2.height / 2;





    }

    draw(ctx, temp) {

        let gap = -125;

        if (this.#stage == 1) {
            if (this.#y < temp)
                ctx.drawImage(this.#img,
                    this.#width * this.#index, 0, 200, 162,
                    this.#x, this.#y, 250, 150)
            else ctx.drawImage(this.#img,
                this.#width * this.#index, 0, 200, 162,
                this.#x, temp, 250, 150)

        }
        else if (this.#stage == 2) {

            if (this.#index < 5) {
                if (this.#y < temp)
                    ctx.drawImage(this.#img2,
                        this.#width2 * this.#index, this.#height2, this.#width2, this.#height2,
                        this.#x + 20, this.#y+gap, 250, 150)


                else
                    ctx.drawImage(this.#img2,
                        this.#width2 * this.#index, this.#height2, this.#width2, this.#height2,
                        this.#x + 20, temp+gap, 250, 150)
            }

            else if (5 <= this.#index) { //||this.#index < 7) {
                if (this.#y < temp)
                    ctx.drawImage(this.#img2,
                        this.#width2 * (this.#index - 5), 0, this.#width2, this.#height2,
                        this.#x + 20, this.#y+gap, 250, 150)


                else
                    ctx.drawImage(this.#img2,
                        this.#width2 * (this.#index - 5), 0, this.#width2, this.#height2,
                        this.#x + 20, temp+gap, 250, 150)
            }
        }



        else if (this.#stage == 3) {

            // console.log("iinninin" + this.#index);

            if (this.#index < 5) {
                if (this.#y < temp)
                    ctx.drawImage(this.#img2,
                        this.#width2 * this.#index, this.#height2, this.#width2, this.#height2,
                        this.#x + 10, this.#y+gap, 250, 150)
                        
                else
                    ctx.drawImage(this.#img2,
                        this.#width2 * this.#index, this.#height2, this.#width2, this.#height2,
                        this.#x + 10, temp+gap, 250, 150)
            }

            else if (5 <= this.#index) {
                if (this.#y < temp)
                    ctx.drawImage(this.#img2,
                        this.#width2 * (this.#index - 5), 0, this.#width2, this.#height2,
                        this.#x + 10, this.#y+gap, 250, 150)


                else
                    ctx.drawImage(this.#img2,
                        this.#width2 * (this.#index - 5), 0, this.#width2, this.#height2,
                        this.#x + 10, temp+gap, 250, 150)
            }
        }

    }

    update(speed) {
        this.#y += this.#speedy;
        this.#x -= speed;
    }

    get x() {
        return this.#x;
    }
    set x(x) {
        this.#x = x;
    }

    get index() {
        return this.#index;
    }

    set index(index) {
        this.#index = index;
    }

    set stage(stage) {
        this.#stage = stage;
    }
}