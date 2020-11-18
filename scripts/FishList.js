// STEP 6
// Fish List Component 


// Below code and comment form chapter 10
/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module
import { useFish } from './FishDataProvider.js'
import { Fish } from './Fish.js'
export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")
    const fishes = useFish()

    let fishHTMLrepresentation = ""
    for (const fish of fishes) {
        console.log(fish)
        const fishHTML = Fish(fish) 


        contentElement.innerHTML += fishHTML
        // <article class="fishList">
        //     ${fishHTMLrepresentation}
        // </article>
    }
}

// For STEP 7