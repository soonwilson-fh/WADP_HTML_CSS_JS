function logout() {
alert("Thank you for using our page");
window.location.href = "GreenFutureHomepage.html";
}

var admin = sessionStorage.getItem("admin");
var admin = JSON.parse(admin);
var sadmin = admin;

var str = document.getElementById("sadmin").innerHTML; 
var res = str.replace("Welcome", sadmin);
document.getElementById("sadmin").innerHTML = res;

if (document.getElementById("sadmin").innerHTML != null) {
	var nbar = document.getElementById("nnbar");
	var str1 = document.getElementById("reg").innerHTML; 
var res1 = str1.slice(50);
document.getElementById("reg").innerHTML = res1;

var str2 = document.getElementById("log").innerHTML; 
var res2 = str2.slice(50);
document.getElementById("log").innerHTML = res2;
}