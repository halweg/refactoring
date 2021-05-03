class Order {

    constructor(priority) {
        this._priority = priority;
    }

    get priorityToString() {
        return this._priority.toString();
    }

    set priority(aString) {
        this._priority = new Priority(aString);
    }

    get priority() {
        return this._priority;
    }

}

class Priority {

    constructor(value) {
        if (value instanceof Priority) return value;
        if (Priority.legalValues().includes(value))
            this._value = value;
        else
            throw new Error(`<${value}> is invalid for Priority`);
    }
    toString() {return this._value;}
    get _index() {return Priority.legalValues().findIndex(s => s === this._value);}
    static legalValues() {return ['low', 'normal', 'high', 'rush'];}
    equals(other) {return this._index === other._index;}
    higherThan(other) {return this._index > other._index;}
    lowerThan(other) {return this._index < other._index;}

}

let orders = [];
orders.push(new Order(new Priority("high")));
orders.push(new Order(new Priority("rush")));
orders.push(new Order(new Priority("low")));
orders.push(new Order(new Priority("rush")));
orders.push(new Order(new Priority("low")));


highPriorityCount = orders.filter(o => o.priority.higherThan(new Priority("normal")))
    .length;

console.log(highPriorityCount)

