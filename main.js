function Fib()
{
   var n = prompt ('Введите количество итераций', 10); // Сколько элементов хотим получить
    var fibonacci = [0, 1]; // Первые два элемента последовательности Фибоначчи
    
    for (i = 2; i < n; i ++) {
      // Получаем i-й элемент последовательности как сумму предыдущих двух
      fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    alert(fibonacci);
}

function Game()
{
    var i=5;// и оценка зависит от 5 проходов
    var number;
    var a=1;
    var b=10;
    var x; var y;
    var vivod="";
    var sum=0;
     var sumok=0;
    var sumno=0;
    while (i)
    {
    number=Math.round(a+(b-a%10)*Math.random());
    x=number;
    number=Math.round(a+(b-a%10)*Math.random());
    y=number;
    vivod=prompt("Сколько будет " + x + " + " + y + " = ?","");
    sum=x+y;
    if (sum==vivod) 
            {
            alert("Верно"); sumok++;
            }
    else alert("Не верно"); sumno=5-sumok;
    i--
}
     
    alert(`Верных ответов = ${sumok} \n Не верных ответов = ${sumno}`);
     
}

function Numbers()
{
    var n =  prompt('Число', 1234577);
var count3 = 0;
while(n)
{  
var del = n%10; 
 if (del==3 ) count3 ++; 
 n = (n- del)/10;
}

alert ("Трока встречается  "   + count3+ " раз ");
}