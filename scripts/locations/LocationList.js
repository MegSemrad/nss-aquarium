import { useLocation } from './LocationDataProvider.js'
import { Location } from "./Location.js"
export const locationList = () => {
    
   
    const contentElement = document.querySelector(".locations")
    const myLocations = useLocation()

    for (const locationObject of myLocations) {
        console.log(locationObject)
        const locationHTML = Location(locationObject)
  

        contentElement.innerHTML += locationHTML
}

}