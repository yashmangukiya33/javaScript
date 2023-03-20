// let cart = [{
//     product: ['keyboard', 'mouse', 'monior', 'pro', 'ram'],
//     price: [700, 100, 5500, 11000, 8000],
//     qty:[100,100,40,30,80],
    
// }];

// cart.forEach(Element =>{
//     console.log(Element);
// });
var cart = {
    product: ["keyboard", "mouse", "monior", "pro", "ram"],
    price: [700, 100, 5500, 1100, 8000],
    qty: [100, 100, 40, 30, 80],
}
let discount = [10]
let gst = [18]

console.log("Product      price   qty     amt         disc      discAmt     gst     BillAmt")
for (i = 0; i < cart.product.length, i < cart.price.length, i < cart.qty.length; i++) {
    var amount = Math.imul(cart.price[i], cart.qty[i])
    // console.log(amount)

    var disc = Math.imul(amount, discount) / 100
    // console.log(disc)

    var dis_amt = amount - disc
    // console.log(dis_amt)

    var gst_amt = Math.imul(dis_amt, gst) / 100
    // console.log(gst_amt)

    var net_amt = dis_amt + gst_amt;
    // console.log(net_amt)

    console.log(cart.product[i], "\t", cart.price[i], "\t", cart.qty[i], "\t", amount, "\t", disc, "\t", dis_amt, "\t", gst_amt, "\t \t \t", net_amt)
}
