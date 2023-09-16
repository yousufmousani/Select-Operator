var userinput1 =+prompt('Enter Value 1')
var userinput2 =+prompt('Enter Value 2')
var Operator =prompt('Enter Operator (+,-,/,%)')

if(Operator == '+'){
    document.write(userinput1+userinput2)
}
else if(Operator == '-'){
    document.write(userinput1-userinput2)
}
else if(Operator == '/'){
document.write(userinput1/userinput2)
}
else if(Operator == '*'){
    document.write(userinput1*userinput2)
    }
else if(Operator == '%'){
document.write(userinput1%userinput2)
}
else{
    document.write('Select True Condition')
}