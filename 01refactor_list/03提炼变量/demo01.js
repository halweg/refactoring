let order = {
    quantity : 2,
    itemPrice : 700,
}

//优惠，quantity超过500的部分打折 0.05 , 额外收取0.1份额的费用（上限100元）
function price(order) {
//price is base price - quantity discount + shipping
    return order.quantity * order.itemPrice -
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
        Math.min(order.quantity * order.itemPrice * 0.1, 100);
}

console.log(price(order));
