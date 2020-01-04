/*1. Все элементы label внутри таблицы. Должно быть 3 элемента.*/
console.log(document.querySelectorAll("#age-table label"));
	

/*2. Первую ячейку таблицы (со словом "Возраст").*/
/*let table = document.getElementsByTagName("td")[0];
	console.log(table);*/
let table = document.querySelector("td");
	console.log(table);

/*3. Вторую форму в документе.*/
let form = document.getElementsByTagName("form")[1];
	console.log(form);
	

/*4. Форму с именем search, без использования её позиции в документе.*/
let search = document.getElementsByName("search");
	console.log(search);


/*5. Элемент input в форме с именем search. Если их несколько, то нужен первый.*/
console.log(document.querySelector("input"));


/*6. Элемент с именем info[0], без точного знания его позиции в документе.*/
console.log(document.getElementsByName("info[0]"));

/*7. Элемент с именем info[0], внутри формы с именем search-person.*/
let nol = document.querySelectorAll('form[name="search-person"] [name="info[0]"]');
	console.log (nol);
	