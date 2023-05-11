import { appState } from "../AppState";
// import { House } from "../Models/House.js";
import { saveState } from "../Utils/Store.js";

function _saveHomes() {
    saveState('homes', appState.homes)
}

class HomesService {


  setActive(houseId) {
      let foundHouse = appState.homes.find(h => h.id == houseId)
      console.log(foundHouse);
      appState.activeHouse = foundHouse
  }

  createHouse(formData) {
    // debugger
    // NOTE instantiate my house class, and make a new 'house' out of my formData object
    let newHouse = new house(formData)
    console.log('new house', newHouse);
    appState.homes.push(newHouse)
    // saveState('homes', appState.homes)
    _saveHomes()
    console.log(appState.homes);
    appState.emit('homes')
}

deleteHouse(houseId) {
    let houseToDelete = appState.homes.find(c => c.id == houseId)
    console.log('delete THAT house', houseToDelete)
    // NOTE set the appstate.homes to an array of homes without the house that we deleted
    // NOTE FILTER OUT the house that we deleted
    appState.homes = appState.homes.filter(c => c.id != houseId)
    _saveHomes()
}

}

export const homesService = new HomesService()