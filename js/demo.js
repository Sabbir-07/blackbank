//select where we work
document.getElementById("btn-submit").addEventListener("click",function(){

//get email value
const emailFeild=document.getElementById("user-email");
const email=emailFeild.value;


//get the password
const passwordFeild=document.getElementById("user-password");
const password=passwordFeild.value;

//conditon
if(email==="sabbir@gmail.com"&& password==="secret"){
    window.location.href="bank.html"
}
else{
    alert("invalid user");
}

});
