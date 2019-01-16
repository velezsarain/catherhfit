import clock from 'clock'
import document from 'document'
// import { preferences } from "user-settings";

// Update the clock every minute
// Set monospace numbers
clock.granularity = 'seconds'
document.getElementById('marker-3').text = '\x13'
document.getElementById('marker-9').text = '\x19'

// Get a handle on the <text> element

// Update the <text> element every tick with the current time
// clock.ontick = (evt) => {
// }

// font size at 50px -> H 36px W 26px | 32px margin from outside
// diameter = 625
// 1% = 6.25
// numbered-hour-marker -> W 7% 21px | H 3.5% 10px
// hour-marker -> W 4% 12px | H 16% 50px
// minute-marker -> W 1% 3px | H 5% 15px
// seconds-hand -> W 2px | L 62% 186
