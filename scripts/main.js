// STEP 2
// Must import function from page FishDataProvider.js
// useFish is the name of the function from FishDataProvider.js and is what is placed in {}

import { useFish } from './FishDataProvider.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

// After this we need to "convert the raw data into HTML representation and render them in browser" must "automate the creation of the HTML list of fish from the objects in fish collection, so never have to copy/paste HTML directly when must add or delete fish"
// For STEP 3 go to Fish.js



// STEP 5

// Import the FishList here
// FIX THIS 
import { } from './FishList.js'

FishList()