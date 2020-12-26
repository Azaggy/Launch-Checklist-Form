// Write your JavaScript code here!
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let coPilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let faultyItems = document.getElementsById("faultyItems");
      let cargoStatus = document.getElementById("cargoStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let launchStatus = document.getElementById("launchStatus");
      let pilotStatus= document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");

      if (pilotName.value === "" || coPilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
      alert("All fields are required!"); 
      } else if (isNaN(pilotName) == false || isNaN(coPilotName) == false) {
         alert("Invalid entry!");
      } else {
         if (fuelLevel < 10000 && cargoMass > 10000) {
      faultyItems.style.visibility = "visible";
      pilotStatus.innerHTML = `${pilotName} is ready.`;
      copilotStatus.innerHTML = `${coPilotName} is ready.`;
      cargoStatus.innerHTML = "Cargo Mass too high for the journey";
      fuelStatus.innerHTML = "Fuel Level too low for the journey.";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
      } else if (fuelLevel > 10000 && cargoMass > 10000) {
        faultyItems.style.visibility = "visible";
        pilotStatus.innerHTML = `${pilotName} is ready.`;
        copilotStatus.innerHTML = `${coPilotName} is ready.`;
         cargoStatus.innerHTML = "Cargo Mass too high for the journey"
         fuelStatus.innerHTML = "Fuel level high enough for launch";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
      } else if (fuelLevel < 10000 && cargoMass < 10000) {
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotName} is ready.`;
         copilotStatus.innerHTML = `Co-pilot ${coPilotName} is ready.`;
         cargoStatus.innerHTML = "Cargo mass low enough for launch";
         fuelStatus.innerHTML = "Fuel Level too low for the journey.";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";      
      } else {
            faultyItems.style.visibility = "visible";
            pilotStatus.innerHTML = `${pilotName} is ready.`;
            copilotStatus.innerHTML = `${coPilotName} is ready.`;
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            launchStatus.innerHTML = "Shuttle ready for launch";
            launchStatus.style.color = "green";       
      };
   };
});
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().them( function(json) {
         const div = document.getElementById("missionTarget")
         div.innerHTML = `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${json[0].name}</li>
                    <li>Diameter: ${json[0].diameter}</li>
                    <li>Star: ${json[0].star}</li>
                    <li>Distance from Earth: ${json[0].distance}</li>
                    <li>Number of Moons: ${json[0].moon}</li>
                </ol>
            <img src="${json[0].image}"> `
      })
   })
})

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
