const endDate= "20 June 2023 08:23:00 PM";

document.getElementById("end-date").innerText= endDate;
const inputs= document.querySelectorAll("input");

function clock()
{
    const end= new Date(endDate);
    const now = new Date();
    const diff=(end-now) / 1000;

    if(diff<0) //its means if diff becomes - negative then restarts the timer

    return;
    inputs[0].value= Math.floor(diff/3600/ 24); // for calculating value of days diff/ sec/hours
    inputs[1].value= Math.floor(diff/3600)% 24; //for calculating Hours diff/sec% hour
    inputs[2].value= Math.floor(diff/60)% 60; //for calculating value of Minutes
    inputs[3].value= Math.floor(diff)% 60; // For calculating value of seconds




    /**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */


}

//Now call function
clock();

setInterval(() => {
    clock();
}, 1000);