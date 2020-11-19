const fishCollection = [
    {
        name: "Bart",
        species: "Spotted Sea Trout",
        length: 14,
        location: "Gulf of Mexico",
        food: "crustaceans", 
        image: "spotted_seatrout.jpg"
        
    },

    {
        name: "Bubbles",
        species: "Beta",
        length: 3,
        location: "PetsMart",
        food: "Beta pellets",
        image: "newbetafish.jpeg"
        
    },

    {
        name: "Finn",
        species: "Platnium Angel Fish",
        length: 5,
        location: "Freshwater River",
        food: "Water Bugs",
        image: "PlatinumAngelFish.jpg"
        
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

// Look to chapters 9 and 10 for reference but also in file NSS/Bootcamp/November/Day 17 for reference - there is some discrepancy between chapters and video! 
// export const useFish = () => {
//     return fishCollection.slice()
// }

// .slice is a method used to access certain items/or chunk of an array. However, if () are left empty it will collect every item in there


export const mostHolyFish = () => {
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    const soldiers = []

    for (const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
            soldiers.push(fish)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    const regularFish = []
    for (const fish of fishCollection) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regularFish.push(fish)
        }
        return regularFish
    }
   
}
