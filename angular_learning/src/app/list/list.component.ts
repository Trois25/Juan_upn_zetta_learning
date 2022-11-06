import { Component, OnInit , Input , Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    totalprice: number = 0;
    //mengambil data dari parent
    @Input() public Listitem:any;
    @Output("addproductlist") productlistdata = new EventEmitter<{productname:string,productprice:number}>(); 
    @Output() totalpriceevent = new EventEmitter<number>();
    // output terus didalam kurungnya nama method yang mau dipakai di html parent terus buat object untuk mengirim data 
    //disini objecctnya productlistdata dan tambahin data yang mau di emit pake new EventEmitter
    
    Title = "Product List";
    check = [false, false, false, false];
    detile(name: string, i: any) {
        this.check[i] = !this.check[i]
    }

    //mengambil nilai
    purchased : string[] = [];
    dproductlist = "";
    purchase = true;
    newitem = '';
    ambil(i: any) {
        this.purchase = !this.purchase;
        // console.log(this.productlist[i].name);
        this.dproductlist = this.Listitem[i].name + " ---- " + " Rp. " + this.Listitem[i].price;
        // console.log(typeof (this.dproductlist));
        this.purchased.push(this.dproductlist)
        this.totalprice += this.Listitem[i].price;
        this.productlistdata.emit({ 
            productname:this.Listitem[i].name,
            productprice:this.Listitem[i].price
            
        })
        this.totalpriceevent.emit(this.totalprice);
        //productlistdata diatas di emit datanya pake fungsi yang di click dari children dengan fungsi diatas

    }

    addproduct(newinputname:HTMLInputElement){
        console.log(newinputname.value);
        this.newitem = newinputname.value;
    }

    constructor() { 
        console.log("memanggil constructor")
    }

    ngOnInit(): void {
        console.log("memanggil ngOnInit");
    }

    ngOnChanges(changes : SimpleChanges){
        console.log("memanggil ngOnChanges");
        console.log(changes);
    }

}