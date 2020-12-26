// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      return response.json().then( function(json) {
         console.log(json);
         let missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = "";
         missionTarget.innerHTML += `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${json[0].name}</li>
                    <li>Diameter: ${json[0].diameter}</li>
                    <li>Star: ${json[0].star}</li>
                    <li>Distance from Earth: ${json[0].distance}</li>
                    <li>Number of Moons: ${json[0].moons}</li>
                </ol>
            <img src=${json[0].image}> 
            </img>`
      });
   });
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let coPilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let faultyItems = document.getElementById("faultyItems");
      let cargoStatus = document.getElementById("cargoStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let launchStatus = document.getElementById("launchStatus");
      let pilotStatus= document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");

      if (pilotName.value === "" || coPilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
      alert("All fields are required!"); 
      } else if (isNaN(pilotName.value) === false || isNaN(coPilotName.value) === false || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Invalid entry!");
      } else {
         if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
      faultyItems.style.visibility = "visible";
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready.`;
      copilotStatus.innerHTML = `Co-pilot ${coPilotName.value} is ready.`;
      cargoStatus.innerHTML = "Cargo Mass too high for the journey";
      fuelStatus.innerHTML = "Fuel Level too low for the journey.";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";

      } else if (fuelLevel.value > 10000 && cargoMass.value > 10000) {
        faultyItems.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready.`;
        copilotStatus.innerHTML = `Co-pilot ${coPilotName.value} is ready.`;
         cargoStatus.innerHTML = "Cargo Mass too high for the journey"
         fuelStatus.innerHTML = "Fuel level high enough for launch";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";

      } else if (fuelLevel.value < 10000 && cargoMass.value < 10000) {
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready.`;
         copilotStatus.innerHTML = `Co-pilot ${coPilotName.value} is ready.`;
         cargoStatus.innerHTML = "Cargo mass low enough for launch";
         fuelStatus.innerHTML = "Fuel Level too low for the journey.";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";      

      } else {
            faultyItems.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready.`;
            copilotStatus.innerHTML = `Co-pilot ${coPilotName.value} is ready.`;
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            launchStatus.innerHTML = "Shuttle ready for launch";
            launchStatus.style.color = "green";      
      }}
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
