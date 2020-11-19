/**
 *  FishList which renders individual fish objects as HTML
 */


// import { useFish } from './FishDataProvider.js'
import { mostHolyFish } from './FishDataProvider.js'
import { soldierFish } from './FishDataProvider.js'
import { nonHolyFish } from './FishDataProvider.js'
import { Fish } from "./Fish.js"
export const FishList = () => {
    
    // Put class from `<article class=".fishList">` element in the index.html file and insert below
    const contentElement = document.querySelector(".fishList")
    const holyFish = mostHolyFish()
    const soldiers = soldierFish()
    const regularFish = nonHolyFish()


    for (const fish of holyFish) {
        console.log(fish)
        const fishHTML = Fish(fish)
  
        // Add to the existing HTML in the content element
        contentElement.innerHTML += fishHTML
    }
    for (const fish of soldiers) {
        console.log(fish)
        const fishHTML = Fish(fish)
  
        // Add to the existing HTML in the content element
        contentElement.innerHTML += fishHTML
    }
    for (const fish of regularFish) {
        console.log(fish)
        const fishHTML = Fish(fish)
  
        // Add to the existing HTML in the content element
        contentElement.innerHTML += fishHTML
    }
}   