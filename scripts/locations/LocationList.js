import { useLocation } from './LocationDataProvider.js'
import { Location } from "./Location.js"

export const locationList = () => {
    
   /*
    In the below 2 const we are invoking the functions 
   */
    const contentElement = document.querySelector(".locations")
    const myLocations = useLocation()

    for (const locationObject of myLocations) {
        console.log(locationObject)
        const locationHTML = Location(locationObject)
  

        contentElement.innerHTML += locationHTML
}

}