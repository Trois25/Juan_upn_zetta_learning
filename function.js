const book = (
    {book:"bintang", price:85000, author:"TereLiye"}
);

function purchasing (book,discount,tax,stock) {
    let result = 0;
    for(let i=0; i<stock; i++) {
        if(book && (i < stock)){
            const amountdiscount = book.price * discount;
            let discountprice = book.price - amountdiscount;
            const amounttax = discountprice * tax;
            let totalprice = discountprice + amounttax;            

            console.log("Amount of discount : " + amountdiscount);
            console.log("Price after discount : " + discountprice);
            console.log("Amount of tax : " + amounttax);
            
            result += totalprice;
        }else{
            console.log("This book stock is empty");
            break;
        }
    }
    console.log("Price after tax : " + result);

    return result;
}

purchasing(book,0.1,0.1,2)