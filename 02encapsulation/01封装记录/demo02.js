//范例2： 封装嵌套记录
const customerData = require('./_data_customer').customer


//customerData[customerID].usages[year][month] = amount;    修改的例子
//读取的例子
function compareUsage (customerID, laterYear, month) {
    const later = customerData[customerID].usages[laterYear][month];
    const earlier = customerData[customerID].usages[laterYear - 1][month];
    return {laterAmount: later, change: later - earlier};
}



console.log(customerData)
