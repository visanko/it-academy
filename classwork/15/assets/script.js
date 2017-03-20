// JavaScript File
var a = "1";
var b = "2";
console.log(a + b);
/*if (!isNaN(a)) {
    alert("число");
}
else {
    (alert("не число"));
}*/

var e;
e = prompt("Ваш возраст", 18);
if (isNaN(e)) {
    alert("вы не указали возраст");
}
else {
    if (parseInt(e) == e) {
        alert("отлично");
    }
    else {alert("введите целое число");
        }
    }


    var d = prompt("Введите число", "например, 25");
    if (isNaN(d)) {
        alert("Не число");
    }
    else {
        if (d % 1 == 0) {
            alert("верно");
        }
        else {
            alert("дробное, введите целое");
        }
    }
