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
    new Dino("Brachiosaurus",70000,372,"herbavor","North America","Late Jurasic","An asteroid was named 9954 Brachiosaurus in 1991."),
    new Dino("Stegosaurus",11600,79,"herbavor","North America, Europe, Asia","Late Jurasic to Early Cretaceous","The Stegosaurus had between 17 and 22 seperate places and flat spines."),
    new Dino("Elasmosaurus",16000,59,"carnivor","North America","Late Cretaceous","Elasmosaurus was a marine reptile first discovered in Kansas."),
    new Dino("Pteranodon",44,20,"carnivor","North America","Late Cretaceous","Actually a flying reptile, the Pteranodon is not a dinosaur."),
    new Dino("Pigeon",0.5,9,"herbavor","World Wide","Holocene","All birds are living dinosaurs.")
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
    //Generate Random fact about dinos
    let compareArray = [object.compareDiet, object.compareHeight, object.compareWeight, object.fact]
    let randomChoice = compareArray[Math.floor(Math.random() * compareArray.length)];
    if(randomChoice !== object.fact && object.species !== "Pigeon"){
       randomChoice.call(object);
    }
    let grid=document.getElementById("grid");
    let tile=document.createElement("div");
    tile.id=object.species;
    tile.className="grid-item";
    let bgimg=document.createElement("img");
    let imgtitle= (object.species).toLowerCase();
    const imageUrl = `images/${imgtitle}.png`;
    bgimg.src=imageUrl;
    tile.appendChild(bgimg);
   
    

    grid.appendChild(tile);
})



        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
