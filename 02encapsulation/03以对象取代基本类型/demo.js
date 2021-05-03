class Order {
    constructor(data) {
        this.priority = data.priority;
    }
}

let orders = [];
orders.push(new Order({priority : 'high'}));
orders.push(new Order({priority : 'rush'}));
orders.push(new Order({priority : 'high'}));
orders.push(new Order({priority : 'low'}));
orders.push(new Order({priority : 'low'}));

let highPriorityCount = orders.filter(o => "high" === o.priority
    || "low" === o.priority)
    .length;

console.log(highPriorityCount)

