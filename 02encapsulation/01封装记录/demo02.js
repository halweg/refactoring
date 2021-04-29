//范例2： 封装嵌套记录
let customers = require('./_data_customer').customer

//customerData[customerID].usages[year][month] = amount;    修改的例子

//zz_getRawDataOfCustomers()[customerID].usages[year][month] = amount; 修改的例子重构后

//读取的例子
function compareUsage (customerID, laterYear, month) {
    const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
    const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
    return {laterAmount: later, change: later - earlier};
}

function getRawDataOfCustomers() {
    return customers;
}

function setRawDataOfCustomers(arg) {
    customers = arg;
}

class CustomersData {
    constructor(data) {
        this._data = data;
    }

    getRawDataOfCustomers() {
        return this._data;
    }

    setUsage(customerID, year, month, amount) {
        this._data[customerID].usages[year][month] = amount;
    }
}

const customersData = new CustomersData(customers);

console.log(customersData.getRawDataOfCustomers())
