
class Organization {
    //倾向把 _data里面的元素 展开到单独的字段里
    //但有时也可能不适合将对象展开到独立的字段里，此时我就会先将_data复制一份， 再进行赋值
    constructor(data) {
        this._data = data;
    }

    get name() {
        return this._data.name;
    }

    set name(aString) {
        this._data.name = aString;
    }

}

const organization = new Organization({name: "Acme Gooseberries", country: "GB"});
function getOrganization() {
    return organization;
}


let result = '';
result += `<h1>${getOrganization().name}</h1>`;
getOrganization().name = result;

console.log(organization)
