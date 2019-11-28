/*1. В доме 5 подъездов по 20 квартир каждый. 
Получите от пользователя номер квартиры и взамен выдайте в консоль номер подъезда. Учитывайте, что пользователь может  ввести число меньше 1 или больше 100.*/

let flatNumber = prompt ("Введите номер вашей квартиры");

    if ((flatNumber < 1) || (flatNumber > 100)) {
        console.log ("Извините, такая квартира не найдена");
    } else if (flatNumber <= 20) {
        console.log ("1")
    } else if (flatNumber <= 40) {
        console.log ("2");
    } else if (flatNumber <= 60) {
        console.log ("3");
    } else if (flatNumber <= 80) {
        console.log ("4");
    } else if (flatNumber <= 100) {
        console.log ("5");
    }

/*2. Получите от пользователя строку с названием марки автомобиля. Напишите конструкцию switch/case, которая будет обрабатывать 6-7 самых известных марок (BMW, Ford, Peugeot etc.) и выдавать в консоль 
введённую строку + страну происхождения автомобиля (например, "Ford – страна происхождения США"). 
Для остальных строк выдавайте сообщение "some_input – страна происхождения неизвестна".*/

let auto = prompt ("Введите марку вашего автомобиля");

    switch (auto) {
        case "AUDI": 
            console.log ("AUDI - страна происхождения Германия");
            break;
        case "BMW":
            console.log ("BMW - страна происхождения Германия");
            break;
        case "CITROEN":
            console.log ("CITROEN - страна происхождения Франция");
            break;
        case "FORD":
            console.log ("FORD - страна происхождения Германия");
            break
        case "NISSAN":
            console.log ("NISSAN - страна происхождения Япония");
            break;
         case "PEUGEOT":
            console.log ("PEUGEOT - страна происхождения Франция");
            break;
        default:
            console.log ("some_input – страна происхождения неизвестна")   
    }

/*3. Пользователь вводит год. Определите, является ли этот год високосным.*/

let year = prompt ("Введите год");

    if ((year % 4 != 0) || (year % 100 == 0) && (year % 400 != 0)) {
        console.log ("Это НЕ високосный год!");
    } else {
        console.log ("Это високосный год!");
    }

/*4. Пользователь вводит число от 1 до 20. Выведите в консоль таблицу умножения этого числа. 
Например, для числа 7: 7x1=7 7x2=14 ... 7x10=70*/

let number = +prompt ("Введите число от 1 до 20");

    for (let i=1; i<=10; i++) {
        let multiply = (number*i);
            console.log (number + "x" + i + "=" + multiply);
    }

/*5. Выведите в консоль сумму всех нечётных чисел от 1 до 50. Дополнительно: решите эту задачу, используя оператор continue.*/

let sum = 0;
    for (let i=1; i<50; i++) {
        if (i % 2 !== 0) {
            sum+=i
        }
    }
        console.log (sum)

// let sum = 0;
    for (let i=1; i<50; i++) {
        if (i % 2 == 0) continue;
            sum+=i
    }
        console.log (sum)

/*6. Используя циклы, выведите в консоль первые 15 чисел Фибоначчи.*/

/*let sum = 0;
    for (let i=0; i<15; i++) {
        
         let result = sum+=i;    
            console.log (result)
        }*/
    

/*7. Используя циклы (и операцию конкатенации), выведите в консоль "шахматную доску":*/
let hash1 = "# ";
let hash2 = " #";

    for (let i = 0; i < 8; i++) { 
        if(i % 2) {
  console.log(hash1 + hash1 + hash1 + hash1);
        } else {
  console.log(hash2 + hash2 + hash2 + hash2);
        }
    }