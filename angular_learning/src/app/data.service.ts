export class dataService{
    productpurchasedlist = [{
        
    }];
    
    additem(name:string, price:number){
        this.productpurchasedlist.push({ name:name, price: price})
    }

    notification(item:string,price:number){
        console.log('You buy ' + item + " with price : " + price)
    }


}