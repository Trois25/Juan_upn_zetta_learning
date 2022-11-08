import { Component, OnInit ,Input} from '@angular/core';

import {dataService} from '../data.service'

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css'],
  providers:[dataService]//memberikan info ke angular kalo kita pake service ini
})
export class PurchaseComponent implements OnInit {
  // item:{name:string,price:number};
  // purchase:{};
  // name = item.name;
  @Input() itempurchasedlist:any;
  @Input() itemtotalprice:number = 0;
  @Input() public Listitem:any;

  constructor(private purchasedata:dataService) { }
  notif(){
    this.purchasedata.notification(this.itempurchasedlist.name,this.itemtotalprice);
  }

  ngOnInit(): void {
  }

}