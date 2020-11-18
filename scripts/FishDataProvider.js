const fishCollection = [
    {
        name: "Bart",
        species: "Spotted Sea Trout",
        length: 14,
        location: "Gulf of Mexico",
        food: "crustaceans", 
        image: ""
        
    },

    {
        name: "Bubbles",
        species: "Beta",
        length: 2.5,
        location: "PetsMart",
        food: "Beta pellets",
        image: "new beta fish.jpg"
        
    },

    {
        name: "Finn",
        species: "Platnium Angel Fish",
        length: 4,
        location: "Freshwater River",
        food: "Water Bugs",
        image: "Platnium Angel Fish.jpg"
        
    },

    {
        name: "Nemo",
        species: "Clownfish",
        length: 3,
        location: "Atlantic Ocean",
        food: "Algae",
        image: "clownfish.jpg"
        
    }
  
]
// Notes from chapter 9 verbatum(mostly) below
// This is a data provider module whose responsibility is to maintain the state of a particular type of data (aka the state of each fish) Other modules in the application can request that state, and then use it for whatever they are responsible for.

// STEP 1 
export const useFish = () => {
    return fishCollection.slice()
}

// .slice is a method that can be used with arrays to allow for the selecting of certain items in the array and using them elsewhere. But if leave theh () blank then the entire array is selected.
// "Export" is used so that once the corresponding "import" is put on another module, that module with the import can use this exported module's function.
// Consequetly the next step is to type import FishDataProvider.js function on next page (page will be main.js)