var emailRef = document.getElementById("inputEmail");
var passRef = document.getElementById("inputPassword");
var addRef = document.getElementById("inputAddress");
var cityRef = document.getElementById("inputCity");
var zipRef = document.getElementById("inputZip");

function submit(){
    var user={
        useremail : emailRef.value,
        userpass : passRef.value,
        useradd : addRef.value,
        usercity : addRef.value,
        userzip : zipRef.value
    }
    console.log('user',user);
}