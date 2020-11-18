// // Job of thsis module is it is what the brower will read/use to populate the browser window 

// // STEP 2
// // Must import function from page FishDataProvider.js
// // useFish is the name of the function from FishDataProvider.js and is what is placed in {}

// import { useFish } from './FishDataProvider.js'

// // STEP 5 is the below import only 
// import { Fish } from './Fish.js'

// // Execute function with the useFish() we just imported - call useFish (because on FishDataProvider.js were only defining the function) and copture it in a variable called allTheFish
// const allTheFish = useFish()

// for (const fishObject of allTheFish) {
//     console.log(fishObject)
//     const fishHTML = Fish(fishObject) 
    // fishHTMl equals what Fish(fishObject) returns which will be the string on HTML written in Fish.js
// }

// After this we need to "convert the raw data into HTML representation and render them in browser" must "automate the creation of the HTML list of fish from the objects in fish collection, so never have to copy/paste HTML directly when must add or delete fish"
// STEP 3: go to index.html and add type="module" in the main.js script tag. Allows us to signal to bowser we are using modules (?)
// For STEP 4 go to Fish.js



// STEP 5

// Import the FishList here
// FIX THIS 
import { FishList } from './FishList.js'

FishList()