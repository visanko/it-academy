// JavaScript File
var myhash = {};

for (var i = 0; i < 7; i++) {
    var color = prompt('input color');
    var tekst = prompt('введите слово');
    var rgb = prompt('введите rgb');
    myhash[color] = {
        "tekst": tekst,
        "rgb": rgb,
    };
}
console.log(myhash);