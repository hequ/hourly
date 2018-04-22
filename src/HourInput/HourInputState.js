import { observable, autorun, computed } from 'mobx'

class HourInputState {
  @observable date = null
  @observable hours = 0

  @computed
  get currentHours() {
    return this.hours
  }

  constructor() {
    autorun(() => {
      console.log("hours set to: ", this.currentHours)
    })
  }
}

export default new HourInputState()