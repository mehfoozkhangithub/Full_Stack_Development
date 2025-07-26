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

    let [oh, om] = outRemoveAlpha.split(':')

    if (oh === "00") oh = "24"

    let hour_Diff = Math.abs(ih - oh);
    let min_Diff = Math.abs(im - om);
    console.log('-> ~ hour_Diff:', hour_Diff);
    console.log('-> ~ min_Diff:', min_Diff);
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
