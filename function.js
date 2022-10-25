const cart = [
    {title:"bintang", price:85000, author:"TereLiye"},
    {title:"bulan", price:80000, author:"TereLiye"},
    {title:"bumi", price:70000, author:"TereLiye"},
    {title:"matahari", price:75000, author:"TereLiye"}
];

function purchasing (book,discount,tax) {
    let result = 0, many = 0;
    for(let i=0; i<cart.length; i++) {
        if(book[i].title && (i < cart.length)){
            many++;

            const amountdiscount = book[i].price * (discount/100);
            let discountprice = book[i].price - amountdiscount;
            const amounttax = discountprice * (tax/100);
            let totalprice = discountprice + amounttax;            
            console.log("-----------------------------------------");
            console.log("book " + many);
            console.log("Book Title : " + book[i].title)
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

purchasing(cart,10,10);