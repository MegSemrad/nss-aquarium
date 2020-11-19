export const Location = (location) => {
    return `
    <section class="location">
        <div><img src="./images/${location.image}" alt="picture of Atlantic Ocean" class="location__image"></div>
        <div class="location__name">${location.name}</div>
        <div class="location__description">${location.description}</div>
        <div><a href="${location.infoLink}" class="location__url">Click to learn more!</a></div>
    </section>
    `
}