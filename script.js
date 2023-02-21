function loguear()
{
var user= document.getElementById("usuario").value;
var pass= document.getElementById("pass").value;
if(user=="Angel076" && pass=="0762021"){
    alert("Usuario y contraseña validos");
    window.location="suma.html";
    
} else {
    alert("Intenta de Nuevo");
}
} 
