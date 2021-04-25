class Order {

    constructor(aRecord) {
        this._data = aRecord;
    }

    get quantity() {return this._data.quantity;}

    get itemPrice() {return this._data.itemPrice;}

    get price() {
        return this.basePrice - this.quantityDiscount + this.shippingFee;
    }

    get basePrice () {
        return this.quantity * this.itemPrice
    }

    get quantityDiscount() {
        return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
    }

    get shippingFee() {
        return Math.min(this.quantity * this.itemPrice * 0.1, 100);
    }
}


let order = new Order({
    quantity : 2,
    itemPrice : 700,
});

console.log(order.price);
