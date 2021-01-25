import { getInfo, getSatelites, getLaunch, getRockets} from './components/service';
import { pName, pYear, pLocation, divMain, select, button} from './components/constants';
import { Satelites } from './components/satelites';
import { Select } from './components/select';
import { Launch } from './components/launch';
import { Rockets } from './components/rocket';

getInfo().then(res => {
    pName.textContent = `Name: ${res.data.name}`;
    pYear.textContent = `Founded: ${res.data.founded}`;
    pLocation.textContent = `Location: ${res.data.headquarters.address}, ${res.data.headquarters.city}, ${res.data.headquarters.state}`;
})
getSatelites().then(res => {
    let satelites = res.data;
    Select(satelites)
    select.addEventListener('change', (e) => {
        divMain.innerHTML = '';
        let tmp = satelites.filter(satelite => satelite.version == e.target.value)
        divMain.append(...Satelites(tmp));
    })
    divMain.append(...Satelites(satelites))
})

getLaunch().then(res => {
    let nextLaunch = Launch(res.data);
    let launchID = res.data.rocket;
    getRockets().then(res => {
        let rocket = Rockets(launchID, res.data);
        button.addEventListener('click', () => {
            divMain.innerHTML = '';
            divMain.append(nextLaunch, rocket);
        } )
    })
})
