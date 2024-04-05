// Math object

console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN2);


var num=2.345677
console.log(Math.ceil(num));
console.log(Math.floor(num));
console.log(Math.round(num));
console.log(Math.trunc(num));


console.log(Math.pow(2,3));
console.log(Math.sqrt(16));
console.log(Math.cbrt(8));
console.log(Math.abs(-20));
console.log(Math.log(10));
console.log(Math.log2(10));
console.log(Math.log10(10));
console.log(Math.min(10,7,8));
console.log(Math.max(10,7,8));
console.log(Math.sin(30));
console.log(Math.cos(30));
console.log(Math.tan(30));


var num2=Math.random();
console.log(num2);
console.log(num2*10);


//Strings

var person="Aiza";
console.log(person.length);
console.log(person.charAt(2));
console.log(person.concat("Farooq").concat("Butt"));
console.log(person.indexOf('a'));
console.log("hohoaiza".indexOf('a'));
console.log("ho-ho-ho".split("-"));
console.log(person.toLowerCase);
console.log(person.toUpperCase);

//Typeof

var test=typeof("My name is Aiza");
console.log(test);

test=typeof(1);
console.log(test);

test=typeof(1.88);
console.log(test);

test=typeof(true);
console.log(test);

test=typeof(1<2);
console.log(test);

test=typeof([1,2,3]);
console.log(test);

test=typeof({key:"hehe"});
console.log(test);

test=typeof(function abc(){console.log("abc")});
console.log(test);