let aDriver = {
    numberOfLateDeliveries : 6
}

function rating(aDriver) {
    return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}

/*function moreThanFiveLateDeliveries(aDriver) {
    return aDriver.numberOfLateDeliveries > 5;
}*/

/*function rating(aDriver) {
    return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
}
function moreThanFiveLateDeliveries(dvr) {
    return dvr.numberOfLateDeliveries > 5;
}*/
console.log(rating(aDriver));


//示例2
let customer = {
    name : "bob",
    location : "火星"
};

function reportLines(aCustomer) {
    const lines = [];
    lines.push(["name", aCustomer.name]);
    lines.push(["location", aCustomer.location]);
    return lines;
}

console.log(reportLines(customer));


