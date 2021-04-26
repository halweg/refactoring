let defaultOwner = {firstName: "Martin", lastName: "Fowler"};

//假设省略一些复杂的业务流程
//在这里修改了defaultOwner的值
setDefaultOwner({firstName: "Rebecca", lastName: "Parsons"})

//首先做一个基础封装
function getDefaultOwner()
{
    return defaultOwner;
}

function setDefaultOwner(arg)
{
    defaultOwner = arg;
}

//使用defaultOwner的代码平平无奇
let spaceship = {};
spaceship.owner = getDefaultOwner();
console.log(spaceship);
