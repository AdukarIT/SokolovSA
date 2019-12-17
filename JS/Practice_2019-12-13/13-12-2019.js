let text = "Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв с во всех элементах массива.";

function doItAll(text) {
	// var.2: split + join

	// text = text.split(".").join("");
	// text = text.split(",").join("");
	// return text;
	// or
	// разбили на слова без точек изапятых и сложили
	let words = text.split(".").join("").split(",").join("").split(" ");

	function reverse(word) {
		let reversed = "";
		for (let i = word.length - 1; i >= 0; i--) {
			reversed += word[i];
		}
		return reversed;
	}
	function reverseAll(words) {
		return words.map(reverse);
	}

	let reversedWords = reverseAll(words)
	//return reversedWords;


// 3.1 сравниваем два слова по длине
	function compareLength(word1, word2) {
		return word1.length - word2.length;
	}

// 3.2 сортируем массив по длине слова
	let sortedReverseWords = reversedWords.sort(compareLength);
	//return sortedReverseWords;

// 4. считаем количество букв С
	function countLetters(counter, word) {
		return counter + word.split("с").length-1;
	}
	return sortedReverseWords.reduce(countLetters, 0);
}

console.log(doItAll(text));


