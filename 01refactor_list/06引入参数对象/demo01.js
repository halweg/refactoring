const station = { name: "ZB1",
    readings: [
        {temp: 47, time: "2016-11-10 09:10"},
        {temp: 53, time: "2016-11-10 09:20"},
        {temp: 58, time: "2016-11-10 09:30"},
        {temp: 53, time: "2016-11-10 09:40"},
        {temp: 51, time: "2016-11-10 09:50"},
    ]
};

function readingsOutsideRange(station, RangeNum) {
    return station.readings
        .filter(r => RangeNum.contains(r.temp));
}

class RangeNum {

    constructor(min, max) {
        this._data = {min: min, max:max}
    }

    get min() {
        return this._data.min;
    }

    get max() {
        return this._data.max;
    }

    contains(arg) {
        return arg >= this.min && arg <= this.max;
    }
}

const rangeNum = new RangeNum(50, 55);

console.log(readingsOutsideRange(station,  rangeNum));
