const productModel = require('./product');
const shippingMethodModel = require('./shippingMethod');

function priceOrder(product, quantity, shippingMethod) {
    const priceData = calculatePricingData(product, quantity);
    return  applyShipping(priceData, shippingMethod);
}

function calculatePricingData(product, quantity) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;
    return { basePrice : basePrice, quantity:quantity, discount: discount};
}

function applyShipping(priceData, shippingMethod) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    return priceData.basePrice - priceData.discount + shippingCost;
}

let product = productModel.newProduct(1090, "华为 P1080", 0.9);

let finalFee = priceOrder(product, 10, shippingMethodModel.newShippingMethod());

console.log(finalFee);
