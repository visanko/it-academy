// JavaScript File
/*Требуется спросить у пользователя:
фамилию, имя, отчество РАЗДЕЛЬНО (тремя операторами prompt)
возраст в годах (оператором prompt)
пол (оператором confirm, например, "ваш пол - мужской?")
и вывести оператором alert анкету пользователя по примеру:

ваше ФИО: Иванов Иван Иванович
ваш возраст в годах: 20
ваш возраст в днях: 7300
через 5 лет вам будет: 25
ваш пол: мужской
вы на пенсии: нет

Создать проект ANKETA. 
На странице anketa_if.html реализовать задание
с использованием условного оператора (if), без условной 
операции (?:). 

В обоих реализациях оператор alert должен 
использоваться ровно один раз.*/

var surname=prompt('Введите фамилию');
var name=prompt('Введите имя');
var patronymic=prompt('Введите отчество');
var age=prompt('Сколько вам полных лет?');
var old=parseInt(age);
var man=confirm('Вы мужчина?');
var daysold=old*365;
var future=old+5;
var sex=""
if(man) {
    var sex="мужской";
} 
else sex="женский";
if (sex=="мужской" && old<61 || sex=="женский" && old<56){ 
var pension="нет";
}
else pension="да";


alert("ваше ФИО:"+" "+surname+" "+name+" "+patronymic+
"\nваш возраст в годах: "+old+
"\nваш возраст в днях: "+daysold+
"\nчерез 5 лет вам будет: "+future+
"\nваш пол: "+sex+
"\nвы на пенсии: "+pension);

/*Требуется спросить у пользователя:
фамилию, имя, отчество РАЗДЕЛЬНО (тремя операторами prompt)
возраст в годах (оператором prompt)
пол (оператором confirm, например, "ваш пол - мужской?")
и вывести оператором alert анкету пользователя по примеру:

ваше ФИО: Иванов Иван Иванович
ваш возраст в годах: 20
ваш возраст в днях: 7300
через 5 лет вам будет: 25
ваш пол: мужской
вы на пенсии: нет

Создать проект ANKETA. 

На странице anketa_oper.html реализовать задание
с использованием условной операции (?:), без условного 
оператора (if). 
В обоих реализациях оператор alert должен 
использоваться ровно один раз.*/

var surname=prompt('Введите фамилию');
var name=prompt('Введите имя');
var patronymic=prompt('Введите отчество');
var age=prompt('Сколько вам полных лет?');
var old=parseInt(age);
var man=confirm('Вы мужчина?');
var daysold=old*365;
var future=old+5;

    var sex=man?"мужской":"женский";

var pension=(sex=="мужской" && old<61 || sex=="женский" && old<56)? "нет":"да";


alert("АНКЕТА"+"\nваше ФИО:"+" "+surname+" "+name+" "+patronymic+
"\nваш возраст в годах: "+old+
"\nваш возраст в днях: "+daysold+
"\nчерез 5 лет вам будет: "+future+
"\nваш пол: "+sex+
"\nвы на пенсии: "+pension);
