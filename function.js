const book = (
    {book:"bintang", price:85000, author:"TereLiye"}
);

function purchasing (book,discount,tax,amount) {
    let result = 0, many = 0;
    for(let i=0; i<amount; i++) {
        if(book && (i < amount)){
            many++;

            const amountdiscount = book.price * discount;
            let discountprice = book.price - amountdiscount;
            const amounttax = discountprice * tax;
            let totalprice = discountprice + amounttax;            
            console.log("-----------------------------------------");
            console.log("book " + many);
            console.log("Amount of discount : " + amountdiscount);
            console.log("Price after discount : " + discountprice);
            console.log("Amount of tax : " + amounttax);
            console.log("Price after tax and discount : " + totalprice);
            result += totalprice;
        }else{
            console.log("This book stock is empty");
            break;
        }
    }
    console.log("");
    console.log("-----------------------------------------");
    console.log("Amount of book : " + many)
    console.log("Total Price : " + result);
    console.log("-----------------------------------------");

    return result;
}

purchasing(book,0.1,0.1,2)