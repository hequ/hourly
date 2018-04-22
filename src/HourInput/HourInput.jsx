import React from 'react'
import actions from './HourInputActions'

const save = (event) => {
  actions.saveHoursForDate(null, event.target.value)
}

const HourInput = () => (
  <div>
    <label htmlFor='#hours-for-task'>How many hours you have worked?</label>
    <input id='hours-for-task' type='text' onChange={save}/>
  </div>
)

export default HourInput