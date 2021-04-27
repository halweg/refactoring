const productModel = require('./product');
const shippingMethodModel = require('./shippingMethod');

function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;
    const shippingPerCase = (basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
}

let product = productModel.newProduct(1090, "华为 P1080", 0.9);

let finalFee = priceOrder(product, 10, shippingMethodModel.newShippingMethod());

console.log(finalFee);
