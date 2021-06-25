const name = "John";
const age = 31;
const job = "Web Developer";
const city = "Miami";



// Create element
let list = document.createElement('ul');
document.body.appendChild(list);

let Li_1 = document.createElement('li');
Li_1.innerHTML = name;
list.appendChild(Li_1);

let Li_2 = document.createElement('li');
Li_2.innerHTML = age;
list.appendChild(Li_2);

let Li_3 = document.createElement('li');
Li_3.innerHTML = job;
list.appendChild(Li_3);

let Li_4 = document.createElement('li');
Li_4.innerHTML = city;
list.appendChild(Li_4);

// String literal

const Li_List = '<li>' + name + '</li>' + '<li>' + age + '</li>' + '<li>' + job + '</li>' + '<li>' + city + '</li>' ;

list.innerHTML = Li_List;

// String interpolation

const html = `
    <li> ${name} </li>
    <li> ${age} </li>
    <li> ${job} </li>
    <li> ${city} </li>
`;

list.innerHTML = html;