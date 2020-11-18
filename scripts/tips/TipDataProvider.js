const tipsCollection = [
    {
       tip: "When a green film begins to cover the sides of your tank, you know it is time to clean your tank."
    },
    {
       tip: "If you have any questions concerning whether or not your tank pH and water temperature are correct, contact your nearest petstore."
    }
]

export const useTips = () => {
    return tipsCollection.slice()
}