var button = document.getElementById("create");
var form = document.getElementById("add-new-contact")
var add = document.getElementById("add");
button.addEventListener("click",function(){
    form.style.display="block"
    button.style.display="none"
})
add.addEventListener("click",function(){
    form.style.display="none"
    button.style.display="inline"
})