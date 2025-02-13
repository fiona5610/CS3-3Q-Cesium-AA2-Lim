function calculatingPopulation(){

// Declaring Variables

let initialPop;
let finalPop;
let rate;
let time = 0;
let eulersNum = 2.71828;
let name;
let region;
let monsteInformation;


// Prompting of values
initialPop = prompt ('Enter the initial population: ');
rate =  parseFloat(prompt ('Enter the rate of growth between 0 to 1:'));
time = parseFloat (prompt('Enter the time in hours'));

// Calculating Final Population
finaPop = Math.round (initialPop * Math.pow(eulersNum, rate*time));

//Prompting for region and name
region = prompt ('Enter the region where the monster is found: ');
name = prompt ('Enter the name of the monster: ');
monsteInformation = region.concat (' ', name);

//Printing of results
document.getElementById("result").innerHTML = "After " + time + " hour/s, the popultaion of " + monsteInformation.toUpperCase(monsteInformation) + " has increased to " + finalPop;

}