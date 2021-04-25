let order = {
    quantity : 2,
    itemPrice : 700,
}

//优惠，quantity超过500的部分打折 0.05 , 额外收取0.1份额的费用（运费，上限100元）
function price(order) {
    //price is base price - quantity discount + shipping
    const basePrice = order.quantity * order.itemPrice;

    const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;

    const shippingFee = Math.min(basePrice * 0.1, 100);

    return basePrice - quantityDiscount + shippingFee;
}

console.log(price(order));
