
var eventsData = [];

function storeEventsData(){
	if(localStorage.getItem("createEventsData") === null){
	var createEventsData = {};
	
	
	
	createEventsData.name = document.getElementById("Eventname").value;
    createEventsData.place = document.getElementById("Eventlocation").value;
	createEventsData.timing = document.getElementById("Eventtime").value;
	createEventsData.description = document.getElementById("Eventdescription").value;
    createEventsData.date = document.getElementById("Eventdate").value;
    createEventsData.eventIC = document.getElementById("EventIC").value;
	
eventsData.push(createEventsData);


localStorage.setItem("createEventsData",JSON.stringify(eventsData));

}

else {
	
	var get = localStorage.getItem("createEventsData");
	get = JSON.parse(get);
	
	var createEventsData = {};

    createEventsData.name = document.getElementById("Eventname").value;
    createEventsData.place = document.getElementById("Eventlocation").value;
	createEventsData.timing = document.getElementById("Eventtime").value;
	createEventsData.description = document.getElementById("Eventdescription").value;
    createEventsData.date = document.getElementById("Eventdate").value;
	createEventsData.eventIC = document.getElementById("EventIC").value;
get.push(createEventsData);
localStorage.setItem("createEventsData",JSON.stringify(get));

} 	 
testing();
}

		