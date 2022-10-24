const book = (
    {book:"bintang", price:85000, author:"TereLiye"}
);

function purchasing (book,discount,tax) {
    let result = 0;

    const amountdiscount = book.price * discount;
    let discountprice = book.price - amountdiscount;
    const amounttax = discountprice * tax;
    let totalprice = discountprice + amounttax;

    console.log("Amount of discount : " + amountdiscount);
    console.log("Price after discount : " + discountprice);
    console.log("Amount of tax : " + amounttax);
    console.log("Price after tax : " + totalprice);

    return result;
}

purchasing(book,0.1,0.1)