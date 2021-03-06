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


function inNewEngland(state) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(state);
}

const newEnglanders = someCustomers.filter(c => inNewEngland(c.address.state));
const newEnglanders2 = someCustomers.filter(c => inNewEngland(c.address.state));
console.log(newEnglanders)
console.log(newEnglanders2)

