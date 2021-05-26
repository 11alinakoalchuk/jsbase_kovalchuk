
//1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
//Функция должна расчитывать результат операции, исходя из переданного ей знака. 
//Функция должна проверять корректность введенных чисел и знака операции.
//Все аргументы для функции принять от пользователя.
function calculate(a, b, sign) {
  var result;
    if (isNaN(a) || isNaN(b)) {
        
    alert("One of arguments is not a number!");
    return;
    }
    switch (sign) {
        case "+" : {
            result = a + b;
            break;
        }
        case "-" : {
            result = a - b;
            break;
        }
        case "/" : {
            result = a / b;
            break;
        }
        case "*" : {
            result = a * b;
            break;
        }
        default: {
            alert("Unsupported operation!");
            return;
        }
 
    }
    return result;
}
var a = +prompt("Enter number:");
var b = +prompt("Enter number:");
var sign = prompt("Enter sign:");
result = calculate(a, b, sign);
if (result != undefined) {
    alert(result);
}
//2.	Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
//Проверить числа на корректность
var number = +prompt('Enter number:');
var power = +prompt('Enter power:');
function abs(val) {
    if (val < 0) {
        return -val;
    }
    else {
        return val;
    }
}

function fun1(a,b) {
    if (b == 0) {
        return 1;
    }
    else if (b == 1) {
        return a;
    }
    var r = 1;
    for (var n = 0; n < abs(b); n++) {
        r = r * a;
    }
    if (b < 0) {
        return 1 / r;
    }
    return r;
}
 
alert(fun1(number, power));
//3.	Допишите функцию, которая определит, парное ли число (решение должно быть в одну строку).
//Функция должна вернуть "Even" или "Odd";

//function isEven(num) {
// your code here
//}

//4.	Напишите функцию, которая возвращает n-е число Фибоначчи.
//Число, которое должна вернуть функция вводит пользователь.
//Для решения используйте цикл.
//Пользователь ввел: 6
//Ряд Фибоначчи: 1, 1, 2, 3, 5, 8, 13, ...
//Функция должна вернуть: 8
function fibo(n) {
    var f = 0, p = 1, c;
    if (n <= 0) {
        return NaN;
    }

    else if (n == 1) {
        return f;   
    }
    
    else if (n == 2) {
        return p;
    }
    
    for (var i = 0; i < n - 2; i++) {
        c = f + p;
        f = p;
        p = c;
    }
    return c;
}
 
n = +prompt("Enter n:");
alert(fibo(n));
//5.  Создать игру "Камень-Ножницы-Бумага".
//Выбор компьютера определяется строкой:  
		
//var computerChoice = Math.random();
//alert(computerChoice);	
//Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
//Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
//Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
//Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
         
function play() {
    do {
        pcChoice = getRandomInt(0, 3);
 
        switch (pcChoice) {
            case 0: 
                alert("stone!");
                break;
            case 1:
                alert("scissors!");
                break;
            case 2:
                alert("paper!");
                break;
            default:
                alert("Something wrong!");
        }
        question = confirm("Another one?");
    }
    while (question);
}
 
play();
