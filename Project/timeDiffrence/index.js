let getInTime = moment().format('h:mm');
// console.log('-> ~ getInTime:', getInTime);
let Dummy = moment().format('h:mm a');
// console.log('-> ~ Dummy:', Dummy);


//here we store 12hr format
let Intime;
let Outtime;

//here we store 24hr format
let Outtime24;


//$ here i am setting the value and getting also... 

const inTime = document.querySelector('#in-time');
const outTime = document.querySelector('#out-time');

const dataSet = () => {
    inTime.value = `${getInTime}`;
    outTime.value = `20:07`;
    inTimeChange()
}

window.onload = dataSet()

function inTimeChange() {

    let [hours, minutes] = inTime.value.split(":").map(Number);
    let period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // 0 becomes 12
    // console.log("in-time",
    //     `${hours}:${String(minutes).padStart(2, "0")} ${period}`
    // );
    Intime = `${hours}:${String(minutes).padStart(2, "0")} ${period}`

}

function outTimeChange() {
    console.log('-> ~ inTime:', outTime.value);

    let [hours, minutes] = outTime.value.split(":").map(Number);
    let period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // 0 becomes 12

    Outtime = `${hours}:${String(minutes).padStart(2, "0")} ${period}`
    Outtime24 = moment(Outtime, "h:mm A").format("HH:mm");
    diffrence_calc()
}


function diffrence_calc() {
    console.log('-> ~ Outtime:', Outtime24);
    console.log('-> ~ Intime:', Intime);

    // here i am removing the 'Am' & 'Pm'
    let [inRemoveAlpha] = Intime.split(" ");
    console.log('-> ~ inRemoveAlpha:', inRemoveAlpha);
    let [outRemoveAlpha] = Outtime24.split(" ");

    // this is for intime start

    let [ih, im] = inRemoveAlpha.split(':').map(Number)
    let [oh, om] = outRemoveAlpha.split(':').map(Number)

    // close


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




