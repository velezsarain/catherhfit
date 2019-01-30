import clock from 'clock'
import { HeartRateSensor } from "heart-rate";
import { BodyPresenceSensor } from "body-presence";
import { display } from "display";
import document from 'document'
import { weekDays } from '../common/const'
// import { preferences } from "user-settings";

const hoursHand = document.getElementById('hours-hand') as GroupElement
const minutesHand = document.getElementById('minutes-hand') as GroupElement
const secondsHand = document.getElementById('seconds-hand') as GroupElement
const dateTextField = document.getElementById('date-text') as TextElement
const heartRateText = document.getElementById('hr-text') as TextElement
const heartRateIcon = document.getElementById('heart-icon') as ImageElement

const heartSensor = new HeartRateSensor()
const bodySensor = new BodyPresenceSensor()
heartSensor.start()


let hours: number
let minutes: number
let seconds: number
let day: number
let weekDaysArray: string[]

// set initial variable values
clock.granularity = 'seconds'
weekDaysArray = weekDays.en.split('|')
day = -1

// clock update loop
clock.ontick = (evt) => {
    if (display.on) {
        hours = evt.date.getHours() % 12
        minutes = evt.date.getMinutes()
        seconds = evt.date.getSeconds()
        hoursHand.groupTransform!.rotate.angle = (hours + minutes / 60 + seconds / 3600) * 30
        minutesHand.groupTransform!.rotate.angle = (minutes + seconds / 60) * 6
        secondsHand.groupTransform!.rotate.angle = seconds * 6

        //console.log(heartSensor.heartRate)

        // if day has changed
        if (day !== evt.date.getDate()) {
            day = evt.date.getDate()
            dateTextField.text = weekDaysArray[evt.date.getDay()] + ' ' + day
        }

        // if(heartSensor.activated){
        //     heartRateIcon.animbuiate('enable');
        // }

        // if (!heartSensor.activated && bodySensor.present) {
        //     heartSensor.start()
        // }

        // if (!bodySensor.present) {
        //     heartSensor.stop()
        // }
    }
}

//heart rate update loop
// heartSensor.onreading = () => {
//     console.log(heartSensor.heartRate)
// }
