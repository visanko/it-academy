// JavaScript File
/*1.С помощью циклов и функции prompt заполнить массив 
из десяти элементов.
После заполнения вывести массив с помощью console.log*/

var str1 = "";

while (str1.length < 11) {
    var num = 10 - str1.length;
    var str = prompt("Введите " + num.toString() + " символов", str1);

    str1 = str1 + str;
}


var mas = [];
for (var i = 0; i < 10; i++) {
    mas.push(str1[i]);
}

console.log(mas.join(" ").toLocaleUpperCase());

