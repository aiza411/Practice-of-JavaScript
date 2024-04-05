function Person_Object_Maker(name,age,gender)
{
    return{
        pname:name,
        page:age,
        pgender:gender
    }
}

function String_Convertor(val) {
    return val.toString();
}

function Counter(val)
{
    console.log(val);
    val--;

    if(val==0)
    {
        console.log("HAPPY NEW YEAR");
        return;
    }

    Counter(val);
}


console.log(Person_Object_Maker('Aiza',18,'female'));
console.log(String_Convertor(10));
Counter(3)