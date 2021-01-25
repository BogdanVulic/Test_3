
export const Rockets = (launchID, rockets) => {
    let rocket = rockets.filter(rocket => rocket.id == launchID)[0];
    const divRocket = document.createElement('div');
        divRocket.className = 'rocket';
        divRocket.innerHTML = `
            <img id="rocket" src="${rocket.flickr_images[0]}">
            <p>Name: ${rocket.name}</p>
            `;
            console.log(rocket)
    return divRocket;
}