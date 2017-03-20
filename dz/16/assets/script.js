// JavaScript File
var RainBow={};
function Colors() {
  RainBow[prompt('Какой цвет вы хотите добавить?')]=prompt('Введите  шестнадцатиричный код цвета в формате: F0F0F0');
} 
output.innerHTML="";
function ShowRainBow(){
var buffer="";
for (var c in RainBow) {
  buffer+='<div style="background-color:#'+RainBow[c]+'">'+c+'</div>';}
output.innerHTML=buffer;
}