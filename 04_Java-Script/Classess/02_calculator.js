let sure = prompt("What Would you like to add dial 1 , for subtract dial 2 , for multiply dial 3 and divide dail 4")
if (sure == 1 ){
    var a = +prompt ("First number would you like to add");
    var b = +prompt ("Second number would you like to add");
    document.write("This is your first value : ");
    document.write(a , "<br>");
    document.write("This is your second value : ");
    document.write(b , "<br>");
    document.write("This is your answer : ");
    document.write(a+b);
}
else if(sure == 2){
    var c = +prompt ("First number would you like to subtract");
    var d = +prompt ("Second number would you like to subtract");
    document.write("This is your first value : ");
    document.write(c , "<br>");
    document.write("This is your second value : ");
    document.write(d , "<br>");
    document.write("This is your answer : ");
    document.write(c-d);
}
else if(sure == 3){
    var e = +prompt("First number would you like to multiple");
    var f = +prompt("Second number would you like to multiple");
    document.write("This is your first value : ");
    document.write(e , "<br>");
    document.write("This is your second value : ");
    document.write(f , "<br>");
    document.write("This is your answer : ");
    document.write(e*f);
}
else if(sure == 4){
    var g = +prompt ("First number would you like to divide");
    var h = +prompt ("Second number would you like to divide");
    document.write("This is your first value : ");
    document.write(g , "<br>");
    document.write("This is your second value : ");
    document.write(h , "<br>");
    document.write("This is your answer : ");
    document.write(g/h);
    // document.write("You reminder is : ");
    // document.write(g%h);
}
else {
    alert("You write invalid number");
}
