/*1. Все элементы label внутри таблицы. Должно быть 3 элемента.*/
console.log(document.querySelectorAll("#age-table label"));
	
// for (let label of document.body.children) {
//   console.log(label); 
// }

/*2. Первую ячейку таблицы (со словом "Возраст").*/
let age = document.table.firstElementChild;
	console.log(age);

	