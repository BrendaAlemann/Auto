function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin" && password=="123admin")
{
    alert ("Sesión iniciada");
    return false;
}
else
{
    alert("Sesión fallida")
}



}