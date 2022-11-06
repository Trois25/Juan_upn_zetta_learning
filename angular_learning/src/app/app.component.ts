import { Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'angular_learning';
    totalprice = 0;
    productlist = [
        {
            name: "MAXPOWER MK853", price: 650000, producttype: "keyboard",
            info: "this keyboard has 5 combination RGB, and you got free tools to change the switch"
        },
        {
            name: "GPRBP27C144", price: 1450000, producttype: 'monitor',
            info: "this monitor has a fiture that can block a blue signal from monitor, so you can use this monitor for a long"
        },
        {
            name: "HIVE UX2", price: 500000, producttype: 'mouse',
            info: "this mouse has a perfect shaped for gamer, it also has space for air vents to make this mouse durable"
        },
        {
            name: "Mousepad MONTIAN", price: 100000, producttype: 'mousepad',
            info: "this mousepad has a big size that can reach your keyboard and mouse also have a polimerphic material which makes it anti-slip"
        }
    ]

    productpurchasedlist = [{
        
    }]

    receivetotal(totalprice:number){
        this.totalprice = totalprice;
        console.log(this.totalprice)
    }

    takeproduct(productinfo: { productname: string, productprice: number}) {
        this.productpurchasedlist.push({ name:productinfo.productname, price: productinfo.productprice})
        
    }
}
