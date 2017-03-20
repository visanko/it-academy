// JavaScript File
/*2.С помощью циклов и функции prompt заполнить массив, 
пока не будет введена пустая строка. 
После заполнения вывести массив с помощью console.log*/

var arr = [];
var value = "";
var value1 = "";

do {
value = prompt("Введите значение  элемента","");
value1 = value1+value;
} while (value.length>0);

var i = 0;
while ( i<value1.length){
    arr.push(value1[i]);
    i++;
}
var arr1 = [];
for (i = 0; i<value1.length; i++){
     arr1.push(value1[i]);
}


console.log(arr);

alert(arr);
