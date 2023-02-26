//TASK 1 - Dördrəqəmli natural ədəd verilmişdir. Onun palindrom olmasını təyin edin. Natural ədəd soldan sağa və sağdan sola eyni oxunarsa, palundromdur. Məsələn, 2332 ədədi palindromdur. n ədədi palindromdursa "YES", əks halda "NO" çap edin.
var a=1331,a1,a2,a3,a4;
a4=a%10;
a3=((a-a4)/10)%10;
a2=((a-(a3*10+a4))/100)%10;
a1=(a-(a3*10+a2*100+a4))/1000;
if((a1==a4)&&(a2==a3)){
    console.log("YES");
}
else {
    console.log("NO");
}
//TASK 2 - Verilmiş ədəd 4 rəqəmli və 3ə və 7-yə bölünəndirsə true halda false çap etsin. 
var b=2100;
if ((b>=1000&&b<=9999)&&b%3==0&&b%7==0) {
    console.log("TRUE");
}
else{
    console.log("FALSE");
}
//TASK 3 - Girişdə n natural ədədi verilir. Bu ədədin sağdan birinci rəqəmini tapmaq tələb olunur.
var c=1234567;
console.log(c%10);
//TASK 4 - Verilmiş dördrəqəmli natural ədədini tərsinə çevirin. Məsələn 2853 daxil olunarsa output olaraq 3582 çıxmalıdır.
var d=1252,d1,d2,d3,d4;
d4=d%10;
d3=((d-d4)/10)%10;
d2=((d-(d3*10+d4))/100)%10;
d1=(d-(d3*10+d2*100+d4))/1000;
if (d4>0) {
    console.log(d4+""+d3+""+d2+""+d1);
}
else if (d4==0) {
    console.log(d3+""+d2+""+d1);
}
//TASK 5 - Verilmiş 3 rəqəmli ədədin rəqəmləri cəmini tapın.(məsələn 236 daxil olunsa output 2+3+6 yəni 11 olmalıdır.)
var e=123,e1,e2,e3;
e3=e%10;
e2=((e-e3)/10)%10;
e1=((e-(e2*10+e3))/100);
console.log(e1+e2+e3);
//TASK 6 - Verilniş ədədin 3 rəqəmli olub olmadığını yoxlayan alqoritm yazın. 
var f=123;
if (f>=100&&f<=999) {
    console.log("TRUE");
}
else{
    console.log("FALSE");
}
//TASK 7 - Verilmiş 2 integer ədədiniz və bir char tipində simvolunuz var. Əgər bu simvol ' + - * / ' bu 4 simvoldan biridirsə uyğun olaraq həmin 2 ədədlər toplanmalı,çıxılmalı,vurulmalı və ya bölünməlidir və nəticə ekrana çap edilməlidir. Əgər bu simvollardan heç biri deyilsə invalid input çap edilsin. Məsələn verilən 5, 76 və '+' simvolu olarsa nəticə-də bu 2 ədəd toplanıb ekrana çap edilməlidir. 
var n=10,m=5,ch;
ch='+';
switch (ch) {
    case '+':
        console.log(n+m);
        break;
     case '-':
            console.log(n-m);
            break;
      case '*':
                console.log(n*m);
                break;
     case '/':
        console.log(n/m);
        break;
    default: console.log("invalid input");
        break;
}
