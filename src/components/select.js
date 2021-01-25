import { select } from './constants';


export const Select = (satelites) => {
    let versions = Array(...new Set(satelites.map(satelite => satelite.version)));

    const defOption = document.createElement('option');
    defOption.textContent = 'Choose version';
    defOption.selected = true;
    defOption.disabled = true;

    select.append(defOption);

    versions.forEach(version => {
        const option = document.createElement('option');
        option.value = version;
        option.textContent = version;

        select.append(option);
    })
}