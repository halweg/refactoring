const newShippingMethod = function () {
    return {
        discountedFee : 100,
        feePerCase : 1000,
        discountRate : 0.5,
    }
}

module.exports = {
    newShippingMethod,
}
