const taxThreshold = function (year) {
    if (year % 2 == 0) {
        return 20;
    }
    return 25;
}

const acquireReading = function () {
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


const baseRate = function (month, year) {
    //假设偶年偶月收取0.5rate,否则收取0.7
    if (month % 2 == 0 && year % 2 == 0) {
        return 0.5;
    }
    return 0.7
}

module.exports = {
    taxThreshold,
    baseRate,
    acquireReading
}
