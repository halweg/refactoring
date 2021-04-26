
function acquireReading() {
    let names = ["halweg", "join", "ste"];
    let randomName = names[Math.floor(Math.random()*3)];
    const reading = {
        customer: randomName ,
        quantity: Math.floor(Math.random()*100) ,
        month: Math.floor(Math.random()*10),
        year: 2017 + Math.floor(Math.random() * 3)
    };

    return reading
}

function baseRate(month, year) {
    //假设偶年偶月收取0.5rate,否则收取0.7
    if (month % 2 == 0 && year % 2 == 0) {
        return 0.5;
    }
    return 0.7
}

function taxThreshold(year) {
    if (year % 2 == 0) {
        return 20;
    }
    return 25;
}

class Reading {

    constructor(data) {
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year  = data.year;
    }

    get customer() {
        return this._customer;
    }

    get quantity() {
        return this._quantity;
    }

    get month() {
        return this._month;
    }

    get year() {
        return this._year;
    }


    get baseCharge() {
        return  baseRate(this._month, this._year) * this._quantity;
    }

    get taxableCharge() {
        return  Math.max(0, this.baseCharge - taxThreshold(this._year))
    }

}


//客户端1
const aReading1 = new Reading(acquireReading());
const baseCharge = aReading1.baseCharge;
console.log(baseCharge)

//客户端2
const aReading2 = new Reading(acquireReading());
const taxableCharge = aReading2.taxableCharge;
console.log(taxableCharge)

//客户端3
const aReading3 = new Reading(acquireReading());
const basicChargeAmount = aReading3.baseCharge
console.log(basicChargeAmount)





