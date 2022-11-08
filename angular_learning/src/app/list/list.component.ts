import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';
import { dataService } from '../data.service'; 

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    providers: [dataService]
})
export class ListComponent implements OnInit {
    totalprice: number = 0;

    constructor(private purchasedata:dataService) { }

    ngOnInit(){
    }
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
    dproductlist:string = "";
    purchase = true;
    ambil(i: any) {
        this.purchase = !this.purchase;
        this.dproductlist = this.Listitem[i].name + " ---- " + " Rp. " + this.Listitem[i].price;
        this.purchased.push(this.dproductlist)
        this.totalprice += this.Listitem[i].price;
        this.productlistdata.emit({ 
            productname:this.Listitem[i].name,
            productprice:this.Listitem[i].price
            
        })
        this.totalpriceevent.emit(this.totalprice);
        //productlistdata diatas di emit datanya pake fungsi yang di click dari children dengan fungsi diatas
        
        //code dibawah bisa dipakai untuk service juga
        //const service = new dataService();
        //service.notification(this.Listitem[i].name, this.Listitem[i].price);
        
        this.purchasedata.notification(this.Listitem[i].name, this.Listitem[i].price);
    }
    
    
}