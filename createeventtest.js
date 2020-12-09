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
	var Eventslots = document.getElementById("Eventslots").value;
	var Eventdatetime = Eventdate + ", " + Eventtime;
	var StringEventdate = JSON.stringify(Eventdate)
	var Eventmonth = StringEventdate.slice(6,8);
	var info= {'EventID':EventID,'Eventname':Eventname,'Eventlocation':Eventlocation,'Eventtime':Eventtime,
	'Eventdescription':Eventdescription,'Eventdate':Eventdate,'EventIC':EventIC,'Eventslots':Eventslots, 'Eventdatetime':Eventdatetime, 'Eventmonth':Eventmonth };
	createEventsData.push(info);
	localStorage.setItem('createEventsData',JSON.stringify(createEventsData));
}
