
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

//客户端1
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

//客户端2
const aReading2 = acquireReading();
const base2 = (baseRate(aReading.month, aReading.year) * aReading.quantity);
const taxableCharge2 = Math.max(0, base2 - taxThreshold(aReading.year))
console.log(taxableCharge2);

//客户端3
const aReading3 = acquireReading();
const basicChargeAmount3 = calculateBaseCharge(aReading3);
function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}
console.log(basicChargeAmount3)



