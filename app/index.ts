import clock from 'clock'
import document from 'document'
// import { preferences } from "user-settings";

// Update the clock every minute
clock.granularity = 'minutes'

// Get a handle on the <text> element
const timeDisplay = document.getElementById('label')
let today: Date
let mins: number
let hours: number

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
    today = evt.date
    hours = today.getHours()
    mins = today.getMinutes()
    timeDisplay.text = `${hours}:${mins}`
}
