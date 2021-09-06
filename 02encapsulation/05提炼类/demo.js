class Person {

    constructor() {
        this._telephoneNumber = new TelephoneNumber()
    }

    set name(arg) {
        this._name = arg;
    }

    set officeAreaCode(arg) {
        this._telephoneNumber.officeAreaCode = arg;
    }


    set officeNumber(arg) {
        this._telephoneNumber.officeNumber = arg;
    }

    get name() {
        return this._name;
    }

    get telephoneNumber() {
        return  this._telephoneNumber.toString();
    }

    get officeAreaCode() {
        return this._telephoneNumber.officeAreaCode;
    }

    get officeNumber() {
        return this._telephoneNumber.officeNumber;
    }

}

class TelephoneNumber {

    set officeAreaCode(arg) {
        this._officeAreaCode = arg;
    }


    set officeNumber(arg) {
        this._officeNumber = arg;
    }


    get officeAreaCode() {
        return this._officeAreaCode;
    }

    get officeNumber() {
        return this._officeNumber;
    }

    toString() {
        return `(${this.officeAreaCode}) ${this.officeNumber}`;
    }
}

let person = new Person;
person.name = "halweg";
person.officeAreaCode = 700011;
person.officeNumber = 9989899;
console.log(person.telephoneNumber)
