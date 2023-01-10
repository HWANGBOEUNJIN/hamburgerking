export default class Customer {
    #img;
    #stage;

    constructor(x = 500, y = 350) {

        this.#stage = 1;

        this.#x = x;
        this.#y = y;
        this.#img = document.getElementById("customers");
        this.#index = 0;
    }

    draw(ctx, index) {

        if (this.#x == 10)
            this.#x = 0

        if (this.#stage == 1) {
            ctx.drawImage(this.#img,
                index * this.#img.width / 10, 0, this.#img.width / 10, this.#img.height,
                this.#x, this.#y, this.#img.width / 10 * 3, this.#img.height * 3)
        }
        else if (this.#stage >= 2) {
            ctx.drawImage(this.#img,
                index * this.#img.width / 10, 0, this.#img.width / 10, this.#img.height,
                this.#x, this.#y - 125, this.#img.width / 10 * 3, this.#img.height * 3)
        }



    }
    #x
    #y
    #index

    get index() {
        return this.#index
    }

    set index(index) {
        this.#index = index;
    }
    set stage(stage) {
        this.#stage = stage;
    }
}