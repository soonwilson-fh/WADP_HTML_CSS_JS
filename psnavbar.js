var admin = sessionStorage.getItem("admin");
var admin = JSON.parse(admin);
var sadmin = admin;
var info = localStorage.getItem("student_info");
var info = JSON.parse(info);
for (var s = 0; s < info.length; s++){
		var storedadmin = info[s].admin;
		if (storedadmin == sadmin){
			if (info[s].role == "Committee") {
			productsales.style.display="none";
			adminproductsales.style.display="block";
		}
			}
			}