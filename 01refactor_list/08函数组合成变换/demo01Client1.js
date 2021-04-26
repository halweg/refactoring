const _ = require('./deepClone.js')
const utils = require('./utils');

function enrichReading(result) {
    let ret = _.deepClone(result);
    ret.baseCharge = calculateBaseCharge(result);
    return ret;
}
function calculateBaseCharge(aReading) {
    return utils.baseRate(aReading.month, aReading.year) * aReading.quantity;
}

let rawReading = utils.acquireReading();
let reading = enrichReading(rawReading);
console.log(reading.baseCharge)
