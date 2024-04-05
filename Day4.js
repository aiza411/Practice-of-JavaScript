// Objects

var storeManager={};
storeManager.age=18;
storeManager.name="Aiza";
storeManager.skills=10;

console.log(storeManager);

var assistantManager={
    age:20,
    name:"Farooq",
    skills:10
};

console.log(assistantManager);
assistantManager.present=true;
console.log(assistantManager);


var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}
console.log(table);

var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2);

var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); 

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

var fruits = [];
fruits.push("apple"); 
fruits.push('pear');
console.log(fruits);
fruits.pop();
console.log(fruits);


var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()