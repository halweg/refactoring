let defaultOwner = {firstName: "Martin", lastName: "Fowler"};

//假设省略一些复杂的业务流程
//在这里修改了defaultOwner的值
defaultOwner = {firstName: "Rebecca", lastName: "Parsons"};

//使用defaultOwner的代码平平无奇
let spaceship = {};
spaceship.owner = defaultOwner;
console.log(spaceship);
