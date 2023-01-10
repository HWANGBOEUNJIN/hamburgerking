export default class Tray{

    #img;
    #breadImg;

    #x;
    #y;
    #breadx;
    #bready;
    #speed;
    #stage;

    constructor(){
        this.#stage = 1;
        this.#x = 230;
        this.#y = 790;
        this.#breadx = 460;
        this.#bready = 850
        this.#img = document.getElementById("tray");
        this.#breadImg = document.getElementById("bread-under");
    }

    init(){
        this.#x = 230;
        this.#breadx = 460;
    }

    draw(ctx){
        let bw = this.#breadImg.width;
        let bh = this.#breadImg.height;
        let gap = -125;


        // console.log("tray: "+this.#stage);
        if(this.#stage ==1 ){
            ctx.drawImage(this.#img,
                            0,0,this.#img.width,this.#img.height,
                            this.#x,this.#y ,this.#img.width,this.#img.height)
            ctx.drawImage(this.#breadImg,
                            0,0,bw,bh,
                            this.#breadx,this.#bready,200,150)
        }
        else if(this.#stage >=2 ){
            ctx.drawImage(this.#img,
                            0,0,this.#img.width,this.#img.height,
                            this.#x,this.#y+gap,this.#img.width,this.#img.height)
            ctx.drawImage(this.#breadImg,
                            0,0,bw,bh,
                            this.#breadx,this.#bready+gap,200,150)
        }
    
    }

    //트레이랑 빵 같이 움직이도록 
    update(speed){
        // console.log("speed: "+speed);
        this.#x -= speed;
        this.#breadx -=speed;
    }


    get x(){
        return this.#x;
    }

    set stage(stage){
        this.#stage = stage;
    }
}