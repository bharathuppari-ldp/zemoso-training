
//DOM
console.log("DOM");
window.onload = function(){
    document.getElementById("heading").innerHTML="Java Script";
    const btn=this.document.getElementById("btn");
    btn.onclick=()=> this.alert("hi bharath");
}
function addItem(){
    const li = document.createElement('li');
    li.textContent = 'New item';
    document.querySelector('ul').appendChild(li);
}
function removeItem(){
    const li=document.querySelector('li');
    li.remove();
}
