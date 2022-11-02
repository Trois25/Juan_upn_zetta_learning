import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
//menampilkan detile
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
//mengambil nilai
productlist="";
purchase = true;
ambil(product: string){
    this.purchase = !this.purchase;
    if(product == 'keyboard'){
        const price = 650000;
        const name = "MAXPOWER MK853"
        this.productlist = name + " ---- " + " Rp. " + price;
    }else if(product =="monitor"){
        const price = 1450000;
        const name = "GPRBP27C144"
        this.productlist = name + " ---- " + " Rp. " + price;
    }else if(product =="mouse"){
        const price = 500000;
        const name = "HIVE UX2"
        this.productlist = name + " ---- " + " Rp. " + price;
    }else if(product =="mousepad"){
        const price = 100000;
        const name = "Mousepad MONTIAN"
        this.productlist = name + " ---- " + " Rp. " + price;
    }
}
  constructor() { }

  ngOnInit(): void {
  }

}
