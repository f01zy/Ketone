import { makeAutoObservable } from "mobx";

class Store {
  navigation = false

  constructor() {
    makeAutoObservable(this)
  }

  setNavigation() {
    this.navigation = !this.navigation
  }
}

export default Store