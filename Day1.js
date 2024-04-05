var petDog="Rex"
var petCat="Pepper"
console.log(petDog)
console.log(petCat)

console.log("My pet dog's name is: ",petDog)
console.log("My pet cat's name is: ",petCat)

var catSound="purr"
var dogSound="woof"

console.log(petDog,"says",dogSound)
console.log(petCat,"says",catSound)

catSound="meow"
console.log(petCat,"now says",catSound)


/* Mathematical Operators */

console.log(1+2)
console.log(1+2+3+4+5+6)
console.log(20-8)
console.log(2*8)
console.log(20/8)
console.log(2**8)
console.log(20%2)
console.log((2*8)+24)
console.log(1+20/8)

/* Number Datatype */
var num1=10
var num2=12
console.log("Sum : ",num1+num2)

/* Boolean Datatype */
console.log(1==2)
console.log(1<2)

// checks for the value only
console.log(2=="2")
console.log(2!="2")

// checks for the value and data type
console.log(2==="2")
console.log(2!=="2")

// logical AND
var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);

// logical OR
var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);


//Conditionals
num2=-40
if(num2>num1)
{
    console.log(num2,"is greater than",num1);
}
else
{
    console.log(num1,"is greater than",num2);
}


var num3=7
if(num3==1)
{
    console.log("1");
}
else if(num3==2)
{
    console.log("2");
}
else if(num3==3)
{
    console.log("3");
}
else
{
    console.log("none");
}

var res="four"
switch(res)
{
    case 'one':
        console.log("one");
        break;

    case 'two':
        console.log("two");
        break;

    case 'three':
        console.log("three");
        break;

    case 'four':
        console.log("four");
        break;

    default:
        console.log("none");
}


//var keyword
//Can be redeclared and updated. Global Scope.
var age=22;
var age=20;
var age=21;
console.log("Age: ",age);

//let keyword
//Can't be redeclared but can be updated. Block level Scope.
let FullName="Aiza";
 //let FullName="Aiza";
FullName="Aiza Farooq";
console.log("Hello",FullName);


//const keyword
//Can't be redeclared and updated. Block level Scope.

const money=1000;
//money=1900;
console.log("Money",money);