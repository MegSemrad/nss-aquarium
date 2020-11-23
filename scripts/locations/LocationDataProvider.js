const locationCollection = [
    {
        image: "AtlanticOcean.jpeg",
        name: "Atlantic Ocean",
        description: "Atlantic Ocean, body of salt water covering approximately one-fifth of Earth's surface and separating the continents of Europe and Africa to the east from those of North and South America to the west. The ocean's name, derived from Greek mythology, means the “Sea of Atlas.” It is second in size to the Pacific Ocean.",
        infoLink: "https://www.britannica.com/place/Atlantic-Ocean"
    },
    {
        image: "GreatBarrierReef.jpg",
        name: "Great Barrier Reef",
        description: "The Great Barrier Reef is the world's largest coral reef system composed of over 2,900 individual reefs and 900 islands stretching for over 2,300 kilometres over an area of approximately 344,400 square kilometres. The reef is located in the Coral Sea, off the coast of Queensland, Australia.",
        infoLink: "https://www.barrierreef.org/the-reef"
    }
]


export const useLocation = () => {
    return locationCollection.slice()
}

/*
    .slice method will allow for the selection of chunks from an array
    or if leave () empty will select the entire array
*/