import assert from 'assert'
/*function circum(radius) {
    return 2 * Math.PI * radius;
}*/

/*
function circum(radius) {
    return circumference(radius);
}

function circumference(radius) {
    return 2 * Math.PI * radius;
}
*/

class Book {
    constructor(){
        this.reservations = [];
    }
    //......省略了一些代码
    addReservation(customer) {
        this.zz_reservations(customer, false);
    }

    zz_reservations(customer, isVip) {
        assert(isVip === false || isVip === true);
        //if isVip else ... 省略一些代码
        this.reservations.push(customer);
    }
}

let book = new Book;

book.addReservation("halweg");
book.addReservation("peter");
book.addReservation("song");

console.log(book.reservations);





