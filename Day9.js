const product={
    productName:"Parker Jotter Standard CT Ball Pen",
    productDesciption:"Highly professional and reliable. An ideal partner with unlimited potential, Parker Jotter is all at once smart, polished and established. With a durable stainless steel nib and finishes that echo the Parker legacy.",
    color:"Black",
    rating:4,
    price:270,
};

document.getElementById("ProductName").textContent=product.productName;
document.getElementById("Color").textContent='('+product.color+')';
document.getElementById("ProductDescription").textContent=product.productDesciption;
document.getElementById("ProductPrice").textContent="Rs : "+product.price;
AddRatingStars();

function AddRatingStars()
{
    for(var i=0 ; i<5 ; i++)
    {
        if(i<product.rating)
        {
            var img=document.createElement('img');
            img.src="/Practice-of-JavaScript/assets/starFull.png";
            img.classList.add("image-fluid");
            img.style.padding="2px";
            document.getElementById("ProductRating").appendChild(img);
        }

        else{
            var img=document.createElement('img');
            img.src="/Practice-of-JavaScript/assets/starEmpty.png";
            img.style.padding="2px";
            img.classList.add("image-fluid");
            document.getElementById("ProductRating").appendChild(img);
        }
    }
}

function BuyItem()
{
    alert("Item Purchased Successfully");
}

document.getElementById("BuyBtn").addEventListener('click',function(){
    alert("Item Purchased Successfully");
});

console.log(product);