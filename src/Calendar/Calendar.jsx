import React from 'react'
import getDaysInMonth from 'date-fns/get_days_in_month'
import format from 'date-fns/format'
import setDate from 'date-fns/set_date'

const currentDate = Date.now()
const currentMonth = format(currentDate, 'MMMM')
const numberOfDaysInThisMonth = getDaysInMonth(currentDate)
const listOfDays = new Array(numberOfDaysInThisMonth).fill(undefined)

const Day = ({ day }) => {
  const date = format(setDate(currentDate, day), "YYYY-MM-DD")
  return (
    <li id={date}>
      <label>{date}</label>
      <input type='text' name='hours-for-date' />
    </li>
  )
}

const ListOfDays = () =>
  listOfDays.map((elem, index) => <Day day={index+1} />)

const Calendar = () => (
  <div id='list-of-days'>
    <h2>{currentMonth}</h2>
    <ul>
      <ListOfDays />
    </ul>
  </div>
)

export default Calendar