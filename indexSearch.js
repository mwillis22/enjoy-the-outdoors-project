import { nationalParksArray } from "./scripts/nationalParkData.js";
import { locationsArray } from "./scripts/locationData.js";
import { parkTypesArray } from "./scripts/parkTypeData.js";

let locationsArrayLength = locationsArray.length;
let parkTypesArrayLength = parkTypesArray.length;

for (let i=0; i < locationsArrayLength; i ++) {
  let newOption = new Option(locationsArray[i], locationsArray[i]);
  let locationDropDown = document.getElementById('Location');
  locationDropDown.add(newOption, undefined);
}

for (let i=0; i < parkTypesArrayLength; i ++) {
  let newOption = new Option(parkTypesArray[i], parkTypesArray[i]);
  let parkDropDown = document.getElementById('What');
  parkDropDown.add(newOption, undefined);
}


