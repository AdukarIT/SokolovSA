// !!!22 ноября 2019 года!!! 

/*2. Напишите функцию, которая удаляет из массива повторяющиеся элементы и возвращает обновлённый массив.*/

function createRandomArray(len, min, max) {
    let someArray = [];

    for (let i = 0; i < len; i++) {
        someArray.push (Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return someArray;
}

function removeDoubles(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j > i; j--) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
            } 
        }
    }
    return arr;
}

let randomArr = createRandomArray (5, 1, 3);
console.log (randomArr); 

let newArray = removeDoubles(randomArr);
console.log(newArray);


/*3. Напишите функцию, удаляющую из массива все элементы, которые при приведении к типу Boolean дают false.*/

let customArray = ["", "bbb", false, "333", 0];
 
function removeFalses(arr) {
    for (let i = arr.length - 1; i>= 0; i--) {
        if (!arr[i]) {
            arr.splice(i, 1);
        }
    }
}


/*Напишите функцию которая подсчитывает сумму чисел от 1 до заданного X.  */

function sumOneToX(x) {
    // body...
    let sum = 0;

    for (let i=1; i<=x; i++)
        sum=sum+i;

return sum;    
}
console.log(sumOneToX(12));


/*Напишите функцию, которая подсчитывает сумму цифр числа.*/

function sumDigits(num) {
    let sum = 0;
    let lastDigit;
    while (num > 0) {
        lastDigit = num % 10; // 7
        sum += lastDigit;
        num = (num - lastDigit) / 10; //15
    }
    return sum;
}

console.log(sumDigits(157));