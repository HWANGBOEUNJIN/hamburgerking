
export default class Background{
    #backgroundImg;
    #backgroundImg2;
    #backgroundImg3;
    #stage;


    constructor(){
        this.#stage = 1;

        this.#backgroundImg = document.getElementById("game-back");
        this.#backgroundImg2 = document.getElementById("game-back-stage2");
        this.#backgroundImg3 = document.getElementById("game-back-stage3");
          
    }

    draw(ctx){
        
        if(this.#stage == 1){
            ctx.drawImage(this.#backgroundImg,
                            0,0,this.#backgroundImg.width,this.#backgroundImg.height,
                            0,0,900,1200);

        }
        else if(this.#stage == 2){
            ctx.drawImage(this.#backgroundImg2,
                            0,0,this.#backgroundImg2.width,this.#backgroundImg2.height,
                            0,0,900,1200);

        }
        else if(this.#stage == 3){
            ctx.drawImage(this.#backgroundImg3,
                            0,0,this.#backgroundImg3.width,this.#backgroundImg3.height,
                            0,0,900,1200);

        }

    }


set stage(stage){
    this.#stage = stage;
}

};

