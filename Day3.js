// Functions

function Hello()
{
    console.log("Hello");
}

function Sum1()
{
    var a=10;
    var b=5;
    console.log("sum :",a+b);
}

function Sum(a,b)
{
    console.log("sum :",a+b);
}

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]) //display the array item where the index is euqal to i
    }
}

Hello();
Sum1();
Sum(2,2);


// Arrays

var array1=[1,2,3,4,5]

for(var i=0 ; i<5 ; i++)
{
    console.log(array1[i]);
}


var colors = ["red", "blue", "green", "yellow"];
for(var i=0 ; i<4 ; i++)
{
    console.log(colors[i]);
}

var str="Aiza";

for(var i=0 ; i<4 ; i++)
{
    console.log(str[i]);
}

var colors1 = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors1);

function letterFinder(word,match)
{
    for(var i=0 ; i<word.length ; i++)
    {
        if(word[i]==match)
        {
            console.log('Found the', match, 'at', i);
        }

        else
        {
            console.log('---No match found at', i);  
        }
    }
}

letterFinder("test","t");