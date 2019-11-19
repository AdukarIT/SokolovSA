// let obj = {};
// 	obj.a=1;
// 	obj.b=2;
// 	obj.c=3;
// console.log(obj.c)
// console.log(obj["c"])

// // 2. 
// for (let prop in obj) {
// 	console.log(obj[prop])
// }

// let city = {};
// 	city.name = "Minsk";
// 	city["population"] = 1995000;
// 	console.log(city)

// // 3.
// let minsk = {};
// minsk.name = "Minsk";
// minsk["population"] = 1995000;

// let homel

let company = {
	name: "Samsung",
	coutry: "South Korea",
	employeed: 480000
}

for (let propName in company)
	console.log (company[propName]); 

// let user = {
//   name: "John",
//   age: 30
// };

// let key = prompt("Что вы хотите узнать о пользователе?", "name");

// // доступ к свойству через переменную
// alert( user[key] );

let user = {
	name: "Semyon",
	surname: "Sokolov",
	hobby: "fishing"
}

user.sayHi = function() {
	console.log("Hello" + "! " + "I'm " + user.name + " " + user.surname + ". " + "My hobby is " + user.hobby)
}
	user.sayHi()