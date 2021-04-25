//范例01： 无局部变量
/*
function printOwing(invoice) {
    let outstanding = 0;
    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");
    // calculate outstanding
    for (const o of invoice.orders) {
        outstanding += o.amount;
    }
    // record due date
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    //print details
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}
*/
let invoice =
    {
        "customer": "BigCo",
        "orders": [
            {
                "playID": "hamlet",
                "amount": 55
            },
            {
                "playID": "as-like",
                "amount": 35
            },
            {
                "playID": "othello",
                "amount": 40
            }
        ]
    };


function printOwing(invoice) {
    printBanner();
    recordDueDate(invoice)
    printDetails(invoice,  calculateOutstanding(invoice))
}

function recordDueDate(invoice) {
    const today = new Date();
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function calculateOutstanding(invoice)
{
    let outstanding = 0;
    for (const o of invoice.orders) {
        outstanding += o.amount;
    }
    return outstanding;
}

function printBanner() {
    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");
}

function printDetails(invoice, outstanding) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

printOwing(invoice);


