let getInTime = moment().format('HH:mm');


//$ here i am setting the value and getting also... 

const inTime = document.querySelector('#in-time');
const outTime = document.querySelector('#out-time');

const dataSet = () => {
    inTime.value = getInTime;
    outTime.value = `00:07`; // here we have store default value's
    diffrence_calc(inTime.value, outTime.value);
}

window.onload = dataSet();

const inTimeChange = () => {
    diffrence_calc(inTime.value, outTime.value)
}
const outTimeChange = () => {
    diffrence_calc(inTime.value, outTime.value)
}


function diffrence_calc(Intime, OutTime) {

    // here i am removing the 'Am' & 'Pm'
    let [inRemoveAlpha] = Intime.split(" ");
    console.log('🚀 ~ inRemoveAlpha:', inRemoveAlpha);

    let [outRemoveAlpha] = OutTime.split(" ");
    console.log('🚀 ~ outRemoveAlpha:', outRemoveAlpha);


    // this is for intime start

    let [ih, im] = inRemoveAlpha.split(':')

    let [oh, om] = outRemoveAlpha.split(':');

    // just test this 12:01pm and 12:07am 

    // convert both times to total minutes from midnight
    let inTotal = ih * 60 + im;
    let outTotal = oh * 60 + om;

    // ✅ check if intime is greater than outtime
    if (inTotal > outTotal) {
        alert("Invalid: Out-time cannot be earlier than In-time!");
        console.clear();
        console.log("Invalid time selection!");
        return; // stop the function here
    }

    // ✅ otherwise calculate normally
    let diffMinutes = outTotal - inTotal;
    let hour_Diff = Math.floor(diffMinutes / 60);
    let min_Diff = diffMinutes % 60;

    // let displayHour = hour_Diff;
    // if (hour_Diff === 24) {
    //     displayHour = 12;
    // }

    console.clear();
    console.log(`Calculated (24h logic): ${hour_Diff} hours, ${min_Diff} minutes`);
    // console.log(`Displayed as: ${displayHour} hours, ${min_Diff} minutes`);
}



// let name = moment().format('MMMM Do YYYY, h:mm:ss a');
/* 
# here we will do if we need 24hr value

let time12 = "7:45 PM";
let time24 = moment(time12, "h:mm A").format("HH:mm");
console.warn('-> ~ time24:', time24);

*/



/* 
! this is the logic where we finde the mints and hrs

let [hours, minutes] = inTime.value.split(":").map(Number);
    let period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // 0 becomes 12

*/
