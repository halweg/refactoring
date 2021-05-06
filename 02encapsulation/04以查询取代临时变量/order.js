class Order {

    constructor(quantity, item) {
        this._quantity = quantity;
        this._item = item;
    }

    get price() {
        //let basePrice = this._quantity * this._item.price;
        //const basePrice = this._quantity * this._item.price; 重构第一步，先把它改成不可变，再测试，确定有没有被从新腹直过
        return this.basePrice * this.discountFactor;
    }

    get basePrice() {
        return this._quantity * this._item.price;
    }

    get discountFactor() {
        let discountFactor = 0.98;
        if (this.basePrice > 1000)
            discountFactor -= 0.03;
        return discountFactor;
    }
}

const o = function (quantity, item) {
    return new Order(quantity, item);
}

module.exports  = {
    Order : o
}
