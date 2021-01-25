
export const Satelites = (satelites) => satelites.map(satelite => Satelite(satelite));

const Satelite = satelite => {
    const divSatelite = document.createElement('div');
        divSatelite.className = 'satelite';
        divSatelite.innerHTML = `
            <p>Version: ${satelite.version}</p>
            <p>TLE_LINE0: ${satelite.spaceTrack.TLE_LINE0}
        `
    return divSatelite;
}