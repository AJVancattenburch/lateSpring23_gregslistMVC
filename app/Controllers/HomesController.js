import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { homesService } from "../Services/HomesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawHomes() {
  console.log('drawing homes');
  let homes = appState.homes
  let template = ''
  
  homes.forEach(h => template += h.CardTemplate)
  setHTML('homes', template)

  _drawCreateHouseButton()
  appState.on('homes', _drawHomes)

  function _drawActive() {
    console.log('drawing active');
    let house = appState.activeHouse
    setHTML('modal-body', house.ActiveTemplate)
}


}
export class HomesController {
  constructor() {
    _drawCreateHouseButton()
    // NOTE I'm listening to the active inHouse the AppState, and if it ever changes, I am going to redraw the ActiveTemplate
    appState.on('activeHouse', _drawActive)
    appState.on('homes', _drawHomes)
    appState.on('userName', _drawCreateHouseButton)
}

// NOTE this is how we 'toggle' drawing homes to the page
getHomes() {
    // TODO note out the arguments for appstate.on
    _drawHomes()
}

setActive(houseId) {
    console.log('setting active', houseId)
    homessService.setActive(houseId)
}

getHouseForm() {
    console.log('get the house form');
    setHTML('modal-body', House.houseForm())
}

createHouse() {
    console.log('creating the house');
    window.event.preventDefault()
    const formHTML = event.target
    console.log('this is the onsubmit event', formHTML);
    const formData = getFormData(formHTML)
    console.log('this is my formatted object from the form', formData);
    formData.creatorName = appState.userName
    HomesService.createHouse(formData)
    // @ts-ignore
    formHTML.reset()
    bootstrap.Modal.getOrCreateInstance('#modal').hide()
}

async deleteHouse(houseId) {
    console.log('delete house', houseId);
    if (await Pop.confirm("Are you sure about that?")) {
        HomesService.deleteHouse(houseId)
    }
}
}

