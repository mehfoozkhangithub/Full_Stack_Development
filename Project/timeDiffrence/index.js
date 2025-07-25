let getInTime = moment().format('h:mm ');
console.warn('-> ~ getInTime:', getInTime);
// let name = moment().format('MMMM Do YYYY, h:mm:ss a');
/* 
# here we will do if we need 24hr value

let time12 = "7:45 PM";
let time24 = moment(time12, "h:mm A").format("HH:mm");
console.warn('-> ~ time24:', time24);

*/

const inTime = document.querySelector('#in-time');
const outTime = document.querySelector('#out-time');

inTime.value = `${getInTime}`;
outTime.value = `08:00`

