import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  // item:{name:string,price:number};
  // purchase:{};
  // name = item.name;
  @Input() itempurchasedlist:any;
  @Input() itemtotalprice:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}