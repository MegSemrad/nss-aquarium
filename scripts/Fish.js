// "Defining Components - there are 2 components to this process"
// 1. "Individual fish - create HTML representation of each fish to be rendered in the list container"
// 2. "List of fish - create HTLM container element & have instructions for rendering the individual fish components for each fish in the collection"
// Because "components have different responsibilities, then each one must eb created in its own module"

// STEP 4
// Single fish component will be handled in the Fish.js file 

/**
 *  Fish which renders individual fish objects as HTML
 */
export const Fish = (fish) => {
    return `
        <section class="fish card">
            <div><img  class="fish__image image--card" src="./images/${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
    `
}

// But this modules purpose is to only define what can happen so go to main.js again for STEP 5

// Now go to FishList.js for next step