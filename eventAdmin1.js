document.addEventListener("DOMContentLoaded",docIsReady);

function docIsReady(){
	createEventsData=localStorage.getItem("createEventsData");
	if (createEventsData==null) {
		createEventsData=[];
	}
	else{
		createEventsData=JSON.parse(createEventsData);
	}
}

function storeEventsData(){
	var EventID= document.getElementById('EventID').value;
	var Eventname= document.getElementById('Eventname').value;
	var Eventlocation= document.getElementById('Eventlocation').value;
	var Eventtime = document.getElementById("Eventtime").value;
	var Eventdescription = document.getElementById("Eventdescription").value;
    var Eventdate = document.getElementById("Eventdate").value;
    var EventIC = document.getElementById("EventIC").value;
	var info= {'EventID':EventID,'Eventname':Eventname,'Eventlocation':Eventlocation,'Eventtime':Eventtime,
	'Eventdescription':Eventdescription,'Eventdate':Eventdate,'EventIC':EventIC };
	createEventsData.push(info);
	localStorage.setItem('createEventsData',JSON.stringify(createEventsData));
}
