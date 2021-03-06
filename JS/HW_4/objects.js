// Напишите функцию, которая получает в качестве аргументов объект и строку и проверяет, есть ли в этом объекте свойство с именем, равным этой строке.


// Создайте объект для хранения своего любимого кулинарного рецепта. Он должен содержать название, ингредиенты и их необходимое количество (в виде вложенного объекта), а также количество порций (больше 1). Напишите функцию, которая получает "рецепт", подсчитывает, сколько каждого ингредиента нужно на одну порцию, и выводит информацию об этом в консоль.


// Создайте объект "Цилиндр" (свойства – радиус и высота). Добавьте в него метод, который считает объём цилиндра (используя this).

let cylinder = {
    radius: 1,
    height: 5,
    volume() {
        console.log(Math.PI * this.radius ** 2 * this.height);
    }
};
cylinder.volume();


// Выберите пингвина из списка вымышленных пингвинов на Википедии и опишите его в виде объекта (не менее трёх полей; например, имя, создатель и источник). Добавьте этому объекту свойство canFly. Добавьте два метода: sayHello, который выводит в консоль приветствие и представление вашего пингвина, и fly, который в зависимости от значения свойства canFly (true или false) определяет, может ли пингвин летать, и сообщает об этом в консоль.