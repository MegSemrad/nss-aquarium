import { useTips } from './TipDataProvider.js'
import { Tip } from "./Tip.js"
export const TipList = () => {
    
   
    const contentElement = document.querySelector(".tankTips")
    const myTips = useTips()

    for (const tipObject of myTips) {
        console.log(tipObject)
        const tipHTML = Tip(tipObject)
  

        contentElement.innerHTML += tipHTML
}

}