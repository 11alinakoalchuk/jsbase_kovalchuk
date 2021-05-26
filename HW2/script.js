 
// 1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.
var a, b, c;
   a = Number(prompt("Enter a:"));
   b = Number(prompt("Enter b:"));
   c = Number(prompt("Enter c:"));
   s = ((a+b+c)/3);
   
alert(s);
if (a===b || a===c || b===c) {
    alert("Error");
}
// 2. Построить прямоугольный треугольник состоящий из символа "*".
//Запросить у пользователя число, к примеру - 4
//*
//**
//***
//****
var input;
var result = "";
var i=0;
input = prompt("Enter a number: ");

do {
    result +="*"; 
    document.write(result + "<br>");
    i++;
} 
while (input > i);
//3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.
var a, b, c;
    a = Number(prompt("Enter a:"));
    b = Number(prompt("Enter b:"));
    c = Number(prompt("Enter c:"));
    
if ((a > b) && (a > c)) {
    alert(a);
}
    
else if ((b > a) && (b > c)) {
    alert(b);
}
         
else if ((c > a) && (c > b)) {
    alert(c);
}
    
 else {
    alert("Two or more identical numbers");
}
//4. Дано два числа A и B где (A < B). 
//Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В.
//Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.   
var a, b, s = 0, odd = "";
    a = Number(prompt("Enter a:"));
    b = Number(prompt("Enter b:"));

if (a < b) {
    for (var i = a; i < b; i++) {
        s += i; 
        if (i % 2 != 0) {
            odd += i + " ";
        }
    }
    alert(s);
    alert(odd);
}

else {
    alert("Error: a >= b");
}