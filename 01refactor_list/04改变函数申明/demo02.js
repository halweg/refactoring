let aCustomer1 = {
    name : "halweg",
    address : {
        city : "London",
        street : "London Road",
        state : "CT"
    }
}

let aCustomer2 = {
    name : "song",
    address : {
        city : "London",
        street : "London Road",
        state : "PLA"
    }
}

let someCustomers = [];
someCustomers.push(aCustomer1);
someCustomers.push(aCustomer2);

function inNewEngland(aCustomer) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
}

const newEnglanders = someCustomers.filter(c => inNewEngland(c));
console.log(newEnglanders)

