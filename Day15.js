//window -> global obj, created by browser
//console,alert are part of window obj

//DOM -> when a web pg is loaded, browser creates a DOM of pg.

document.getElementById("Heading").innerText = "HAHAH";
document.getElementById("btn").addEventListener("click", function () {
  document.body.style.backgroundColor = "green";

  let p = document.createElement("p");
  p.textContent = p.tagName;
  document.getElementById("para").appendChild(p);
});
