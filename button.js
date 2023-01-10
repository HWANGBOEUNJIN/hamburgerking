//버튼들 모아둔 클래스
export default class Button {
    
    constructor() {
        this.gamLoimg = document.getElementById("gamLo");//겜시작
        this.howLoimg = document.getElementById("howLo");//하우투
        this.deLoimg = document.getElementById("deLo");//만든사람
        this.opLoimg = document.getElementById("opLo");//옵션
        this.next = document.getElementById("next");//next

        this.return = document.getElementById("return")//리턴버튼
        this.soundBar = document.getElementById("soundBar"); //소리조절 바

        
        this.x = 230;
        this.y = 500;
        this.yGap = 200;

        this.bw = 450;
        this.bh = 150;
        this.ow = this.opLoimg.width;
        this.oh = this.opLoimg.height;

        this.rw = 130;
        this.rh = 130;

        this.returnX = 750;
        this.returnY = 1050;

        this.nextX = 750;
        this.nextY = 1050;

        this.ctrlwh = 100;

        this.BgmIndex=0;
        this.EffIndex=0;


    }
    drawIntro(ctx) {

        ctx.drawImage(this.gamLoimg,
            0, 0, this.gamLoimg.width, this.gamLoimg.height,
            this.x, this.y, this.bw, this.bh)
        ctx.drawImage(this.howLoimg,
            0, 0, this.howLoimg.width, this.howLoimg.height,
            this.x, this.y + 200, this.bw, this.bh)
        ctx.drawImage(this.deLoimg,
            0, 0, this.deLoimg.width, this.deLoimg.height,
            this.x, this.y + 400, this.bw, this.bh)
        ctx.drawImage(this.opLoimg,
            0, 0, this.ow, this.oh,
            700, 1000, this.ow, this.oh)
    }

    drawReturn(ctx){
        ctx.drawImage(this.return,
            0, 0, this.return.width, this.return.height,
            this.returnX, this.returnY, this.rw, this.rh)
    }

    drawNext(ctx){
        ctx.drawImage(this.next,
            0, 0, this.next.width, this.next.height,
            this.nextX, this.nextY, this.rw, this.rh)
    }


    drawOption(ctx,index){
        //696*564 - soundBar
        this.BgmIndex=index;
        ctx.drawImage(this.soundBar,
            0,this.soundBar.height/6* this.BgmIndex,this.soundBar.width, this.soundBar.height/6,
            260,480,this.soundBar.width*2/3, this.soundBar.height/6)
        }
        

    drawEffOption(ctx,index){
        //696*564 - soundBar
        this.EffIndex=index;
        ctx.drawImage(this.soundBar,
            0,this.soundBar.height/6*this.EffIndex,this.soundBar.width, this.soundBar.height/6,
            260,650,this.soundBar.width*2/3, this.soundBar.height/6)
        }
            

}