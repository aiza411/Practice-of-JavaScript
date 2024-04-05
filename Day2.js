// Loops

//for loop
for(var i=0 ; i<3 ; i++)
{
    console.log(i+1);
}
console.log("GO!!!");

for(var i=3 ; i>0 ; i--)
{
    console.log(i);
}
console.log("HAPPY MEW YEAR!!!");


//while loop
var count=3
while(count>0)
{
    console.log(count);
    count--;
}
console.log("HAPPY MEW YEAR!!!");


// nested loop
var limit=5
var string="";
for(var i=0 ; i<limit ; i++)
{
    for(var j=0 ; j<=i ; j++)
    {
        string+="*"
    }
    string+="\n"
}

console.log(string);


for (var i = 1; i <= 10; i++) {
    if(i == 1) {
        console.log("Gold medal")
    } else if (i == 2) {
        console.log("Silver medal")
    } else if (i == 3) {
        console.log("Bronze medal")
    } else {
        //this block will run if no condition matches
        console.log(i)
    }
}


for (var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("Gold medal")
            break
        case 2:
            console.log("Silver medal")
            break
        case 3:
            console.log("Bronze medal")
            break
        default:
            //this block will run if no condition matches
            console.log(i)
    }
}

