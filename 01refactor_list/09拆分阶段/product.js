const newProduct = function (price, name, discountRate) {
    return {
        basePrice: price,
        name: name,
        discountRate : discountRate,
        discountThreshold : 7,
    };
}

module.exports = {
    newProduct,
}
