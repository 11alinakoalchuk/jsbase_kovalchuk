
//1. Сделать собственные примеры методов применяемых для массивов.
    // Сумма всех чисел массива:
         var arr = [3,2,5,6];
         function arraySum(array){
             var sum = 0;
             for(var i = 0; i < array.length; i++){
                 sum += array[i];
             }
             console.log(sum);
         }
        
         arraySum(arr);  
 
    // Поиск простых чисел в массиве
         var arr = [];
         arr.length = +prompt('Enter length of array: ');
         for (var i = 2; i <= arr.length; i++) {
             var count = 0;  
             for (var j = 2; j <= i; j++) {
                 if (i % j) {continue};
                 count += 1;
             }
             if (count == 1) document.write(i);
         }
//2. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.
//Описание:
//п.1 Создайте произвольный массив и заполните его данными, например: var cars = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Mercedes"];
//п.2 Запросите у пользователя название элемента массива
//п.3.1 Если в массиве такой элемент есть - то необходимо после него вставить новый элемент, который пользователь введет дальше
//п.3.2 Если в массиве такого элемента нет - добавить в конец массива
//п.4 Если в массиве есть одинаковые элементы (из. п.2), программа должна добавлять только после первого найденного элемента
//п.5 Запросите у пользователя новый элемент для массива и вставьте его после найденного элемента или же в конец массива (в зависимости от условий выше)

//3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный элемент массива заполнить подмассивом со значением 'odd', а чётный - 'even'. 
//Размер каждого вложенного массива - 3.

//Для массива размером 3
//['odd', 'odd', 'odd']       // 1й элемент
//['even', 'even', 'even']    // 2й элемент
//['odd', 'odd', 'odd']       // 3й элемент

arraySize = +prompt("Enter array size: ");
let myArray = Array();

for (let i = 0; i < arraySize; i++) {
  if (i % 2 == 1) {
    myArray.push(["odd", "odd", "odd"]);
  } else {
    myArray.push(["even", "even", "even"]);
  }
}

console.log(myArray);