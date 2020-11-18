/**
 *  FishList which renders individual fish objects as HTML
 */


import { useFish } from './FishDataProvider.js'
import { Fish } from "./Fish.js"
export const FishList = () => {
    
    // Put class from `<article class=".fishList">` element in the index.html file and insert below
    const contentElement = document.querySelector(".fishList")
    const fishes = useFish()

    let fishHTMLrepresentation = ""
    for (const fish of fishes) {
        console.log(fish)
        const fishHTML = Fish(fish)
  
        // Add to the existing HTML in the content element
        contentElement.innerHTML += fishHTML
}

}