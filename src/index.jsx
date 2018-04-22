import React from 'react'
import ReactDom from 'react-dom'
import HourInput from './HourInput/HourInput.jsx'

const App = () => (
  <div>
    <h1>Hello world!</h1>
    <HourInput />
  </div>
)

ReactDom.render(<App />, document.querySelector('#app-container'))