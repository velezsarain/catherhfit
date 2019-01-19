import clock from 'clock'
import document from 'document'
// import { preferences } from "user-settings";

// update the clock every minute
clock.granularity = 'seconds'
const hoursHand = document.getElementById('hours-hand') as GroupElement
const minutesHand = document.getElementById('minutes-hand') as GroupElement
const secondsHand = document.getElementById('seconds-hand') as GroupElement
let hours: number
let minutes: number
let seconds: number

// clock update loop
clock.ontick = (evt) => {
    hours = evt.date.getHours() % 12
    minutes = evt.date.getMinutes()
    seconds = evt.date.getSeconds()
    hoursHand.groupTransform!.rotate.angle = (hours + minutes / 60 + seconds / 3600) * 30
    minutesHand.groupTransform!.rotate.angle = minutes * 6 + seconds * 0.1
    secondsHand.groupTransform!.rotate.angle = seconds * 6
}

// font size at 50px -> H 36px W 26px | 32px margin from outside
// diameter = 625
// 1% = 6.25
// numbered-hour-marker -> W 7% 21px | H 3.5% 10px
// hour-marker -> W 4% 12px | H 16% 50px
// minute-marker -> W 1% 3px | H 5% 15px
// seconds-hand -> W 2px | L 62% 186 | Bottom to center 16% 48px
