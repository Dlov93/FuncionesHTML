function alertFunction(){
    alert("Es la hora de la Hamburguesa");
}
const ar =document.querySelectorAll('.AR');

ar.forEach(function(elemento){
    elemento.onclick=function(){
    document.getElementById('H').style.color = "red";
}

})

