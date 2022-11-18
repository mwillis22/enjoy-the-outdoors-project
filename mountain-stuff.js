import { mountainsArray } from "./scripts/mountainData.js";


// let locationsArrayLength = locationsArray.length;
// let parkTypesArrayLength = parkTypesArray.length;

// for (let i=0; i < locationsArrayLength; i ++) {
//   let newOption = new Option(locationsArray[i], locationsArray[i]);
//   let locationDropDown = document.getElementById('Location');
//   locationDropDown.add(newOption, undefined);
// }

// for (let i=0; i < parkTypesArrayLength; i ++) {
//   let newOption = new Option(parkTypesArray[i], parkTypesArray[i]);
//   let parkDropDown = document.getElementById('What');
//   parkDropDown.add(newOption, undefined);
// }


// for (let i=0; i < mountainsArray.length, i ++;) {
//     let mtnOption = mountainsArray[i].name
//     let mountainsArray = document.getElementById('mtnStuff')
// }

for (let i = 0; i < mountainsArray.length; i++) {
    let opt = mountainsArray[i].name;
    let el = document.createElement('option');
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
