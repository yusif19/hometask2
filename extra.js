// 3 ededden en boyuyu ile kiciyinin cemini tapin
var a=10,b=4,c=3;
if((a>b&&a>c&&b>c)||(c>a&&c>b&&b>a)){
    console.log(a+c);
}
else if((a>b&&a>c&&c>b)||(b>a&&b>c&&c>a)){
    console.log(a+b);
}
else if((b>a&&b>c&&a>c)||(c>a&&c>b&&a>b)){
    console.log(b+c);
}