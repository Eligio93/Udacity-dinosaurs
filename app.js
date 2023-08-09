    const form=document.getElementById("dino-compare");
    form.style.display="none";
    // Create Dino Constructor
    function Dino(species,weight,height,diet,where,when,fact){
      
        this.species=species,
        this.weight=weight
        this.height=height
        this.diet=diet
        this.where=where
        this.when=when
        this.fact=fact
    
    }


    // Create Dino Objects
   
    let dino1= new Dino("Triceratops",13000,114,"herbavor","North America","Late Cretaceous","First discovered in 1889 by Othniel Charles Marsh");
    let dino2= new Dino("Tyrannosaurus Rex",11905,144,"carnivor","North America","Late Cretaceous","The largest known skull measures in at 5 feet long.");
    let dino3= new Dino("Anklyosaurus",10500,55,"herbavor","North America","Anklyosaurus survived for approximately 135 million years.");
    
    // Create Human Object
    const human={
        name:"Eligio",
        height:100,
        diet:"carnivor",
        weight:100
    }
    // Use IIFE to get human data from form




    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    Dino.prototype.compareHeight = function(){
        if(this.height<human.height){
           this.fact= this.species +" is shorter than "+ human.name;
        }else{
            this.fact=this.species +" is taller than "+ human.name;
        }

    }
    dino1.compareHeight();
    // console.log(dino1.fact)
    dino2.compareHeight();
    console.log(dino2.fact)
    dino3.compareHeight();
    console.log(dino3.fact)
   
   
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.prototype.compareDiet = function(){
        if(this.diet == human.diet){
            console.log(this.species +" and "+ human.name + " have the same diet");
        }else{
            console.log(this.species +" and "+ human.name + " eats different things");
        }
    }
    dino1.compareDiet();
    dino2.compareDiet();
    dino3.compareDiet();

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.prototype.compareWeight=function(){
        if(this.weight< human.weight){
            console.log(this.species +" is lighter than "+ human.name);
        }else{
            console.log(this.species +" is heavier than "+ human.name);
        }


    }
    dino1.compareWeight();
    dino2.compareWeight();
    dino3.compareWeight();


    // Generate Tiles for each Dino in Array
   

  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
