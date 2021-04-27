const organization = {name: "Acme Gooseberries", country: "GB"};

let result = '';
result += `<h1>${organization.name}</h1>`;
organization.name = result;

let title = '';
title += `<author>${organization.name}</author>`;
organization.name = title;

console.log(organization)
