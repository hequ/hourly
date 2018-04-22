import { action } from 'mobx'
import state from './HourInputState'

class HourInputActions {
  @action
  saveHoursForDate(date, hours) {
    state.date = date
    state.hours = hours
  }
}

export default new HourInputActions()