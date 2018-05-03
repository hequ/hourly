import React from 'react'
import ReactDom from 'react-dom'
import Calendar from './Calendar/Calendar.jsx'

const App = () => (
  <div>
    <h1>Hourly</h1>
    <Calendar/> 
  </div>
)

ReactDom.render(<App />, document.querySelector('#app-container'))
