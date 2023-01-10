export default class Heart{
    #img;
    #heartIndex;
    #count;
    #stage;

    
    constructor(){
        this.#stage = 1;

        this.#img = document.getElementById("heart");
        this.#heartIndex =3;
        //***맞은개수변수
        this.#count = 0;
    }
    

    draw(ctx){
        ctx.drawImage(this.#img,
                    0,0,250/3*this.#heartIndex,120
                    ,630,0,250/3*this.#heartIndex,120);
     
    }

    get heartIndex(){
        return this.#heartIndex;
    }

    set heartIndex(heartIndex){
        this.#heartIndex =heartIndex;
    }

    get count(){
        return this.#count;
    }

    set count(count){
        this.#count =count;//손님 수
    }

    set stage(stage){
        this.#stage = stage;
    }
}