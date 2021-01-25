
export const Launch = (launch) => {
    const divLaunch = document.createElement('div');
        divLaunch.className - 'launch';
        divLaunch.innerHTML = `
            <img src="${launch.links.patch.small}">
            <p> Name: ${launch.name}
        `
    return divLaunch;
}