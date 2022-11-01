import { Component} from '@angular/core';

@Component({
    selector:'Card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent{
    Title = "Product List";
    check = false;
    kdetile ="";
    mdetile="";
    msdetile="";
    mpdetile="";
    kinfo ="this keyboard has 5 combination RGB, and you got free tools to change the switch";
    minfo = "this monitor has a fiture that can block a blue signal from monitor, so you can use this monitor for a long";
    msinfo = "this mouse has a perfect shaped for gamer, it also has space for air vents to make this mouse durable"
    mpinfo = "this mousepad has a big size that can reach your keyboard and mouse also have a polimerphic material which makes it anti-slip"
    detile(name:string){
        //alert( name.toUpperCase() + " detile not added yet!!");
        this.check = !this.check
        if(name == 'keyboard'){
            this.kdetile = this.kinfo
            this.mdetile = "";
            this.mpdetile = "";
            this.msdetile = "";

        }else if(name == 'monitor'){
            this.mdetile = this.minfo
            this.kdetile = "";
            this.mpdetile = "";
            this.msdetile = "";

        }else if(name == 'mouse'){
            this.msdetile = this.msinfo
            this.mdetile = "";
            this.mpdetile = "";
            this.kdetile = "";

        }else if(name == 'mousepad'){
            this.mpdetile = this.mpinfo
            this.mdetile = "";
            this.kdetile = "";
            this.msdetile = "";
            
        }
    }
}