//operators are +,-,*,/,%
//logical operators are >,<,>=,<=,=,==,===,!=

var sellingPrice=199;
var listingPrice=799;

var discount=((listingPrice-sellingPrice)/listingPrice)*100;

console.log(discount);

var roundDiscount=Math.round(discount);

console.log(roundDiscount);

//precedence (BODMAS)

var result=listingPrice>sellingPrice;

console.log(result);

//typeof is used to check the which kind of datatype it belongs to

console.log(typeof result);

console.log(typeof discount);

console.log(typeof sellingPrice);


//to know more about operator precedence see in mdn.