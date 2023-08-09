const form = document.getElementById("dino-compare");
form.style.display = "none";
// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {

    this.species = species,
    this.weight = weight
    this.height = height
    this.diet = diet
    this.where = where
    this.when = when
    this.fact = fact

}


// Create Dino Objects
let dinos = [
    new Dino("Triceratops", 13000, 114, "herbavor", "North America", "Late Cretaceous", "First discovered in 1889 by Othniel Charles Marsh"),
    new Dino("Tyrannosaurus Rex", 11905, 144, "carnivor", "North America", "Late Cretaceous", "The largest known skull measures in at 5 feet long."),
    new Dino("Anklyosaurus", 10500, 55, "herbavor", "North America", "Late Cretaceous", "Anklyosaurus survived for approximately 135 million years."),
];
console.log(dinos)
// Create Human Object
const human = {
    name: "Eligio",
    height: 100,
    diet: "carnivor",
    weight: 100
}
// Use IIFE to get human data from form




// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 
Dino.prototype.compareHeight = function () {
    if (this.height < human.height) {
        this.fact = this.species + " is shorter than " + human.name;
    } else {
        this.fact = this.species + " is taller than " + human.name;
    }

}


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareDiet = function () {
    if (this.diet == human.diet) {
        this.fact = this.species + " and " + human.name + " have the same diet";
    } else {
        this.fact = this.species + " and " + human.name + " eats different things";
    }
}



// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareWeight = function () {
    if (this.weight < human.weight) {
        this.fact = this.species + " is lighter than " + human.name;
    } else {
        this.fact = this.species + " is heavier than " + human.name;
    }
}


// Generate Tiles for each Dino in Array
dinos.forEach(function (object) {

    let compareArray = [object.compareDiet, object.compareHeight, object.compareWeight, object.fact]
    let randomChoice = compareArray[Math.floor(Math.random() * compareArray.length)];
    if(randomChoice !== object.fact){
       randomChoice.call(object);
    }
})



        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
