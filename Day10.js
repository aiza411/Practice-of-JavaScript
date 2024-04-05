const person={
    userName: "Aiza Farooq",
    handleName: "aiza04",
    postCount: 10,
    followerCount: 100,
    followingCount: 90,
    bio:"On a journey to find my happy place",
    image:"/Practice-of-JavaScript/assets/userImage.png",
};


var ProfilePic=document.getElementById("image");
ProfilePic.setAttribute('src',person.image);
ProfilePic.setAttribute('width','100px');

document.getElementById("handleName").textContent=person.handleName;
document.getElementById("userName").textContent=person.userName;
document.getElementById("Bio").textContent=person.bio;
document.getElementById("postCount").textContent=person.postCount+" posts";
document.getElementById("followerCount").textContent=person.followerCount+" followers";
document.getElementById("followingCount").textContent=person.followingCount+" following";


document.getElementById("msgBtn").addEventListener('click',function(){
    alert("Message Successfully");
});


followBtn=document.getElementById("followBtn");
followBtn.addEventListener('click',function(){
    followBtn.textContent="Following";
});