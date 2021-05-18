//CALCULATOR PAGE
var appBodyDisappear  = document.getElementById('appB');
const newCalPage = document.getElementById('calcuu');

function calculator(){
    newCalPage.style.display = "block";
    appBodyDisappear.style.display = "none";
}

//CALENDAR PAGE
const newCalendar = document.getElementById("calendar")
const newNotes = document.getElementById('notes');
const ATimer = document.getElementById("timee");
const bmiSolve = document.getElementById('bmi');

function calendarr(){
    newCalendar.style.display = "block";
    appBodyDisappear.style.display = "none";
    newCalPage.style.display = "none";
    newNotes.style.display = "none";
    ATimer.style.display = "none";
    bmiSolve.style.display = "none";
}

function notes(){
    newCalendar.style.display = "none";
    appBodyDisappear.style.display = "none";
    newCalPage.style.display = "none";
    newNotes.style.display = "block";
    ATimer.style.display = "none";
    bmiSolve.style.display = "none";
}
function timerA(){
    ATimer.style.display = "block";
    newCalendar.style.display = "none";
    appBodyDisappear.style.display = "none";
    newCalPage.style.display = "none";
    newNotes.style.display = "none";
    bmiSolve.style.display = "none";
}
function BMI(){
    appBodyDisappear.style.display = "none";
    contactsPage.style.display = "none";
    settingsPage.style.display = "none";
    newCalPage.style.display = "none";
    newCalendar.style.display = "none";
    newNotes.style.display = "none";
    ATimer.style.display = "none";
    bmiSolve.style.display = "block";
}


//BOTTOM-NAVIGATION FUNCTIONS
let contactsPage = document.getElementById('contactss');
let settingsPage = document.getElementById('settingss');

function home(){
    appBodyDisappear.style.display = "block";
    contactsPage.style.display = "none";
    newCalPage.style.display = "none";
    newCalendar.style.display = "none";
    newNotes.style.display = "none";
    ATimer.style.display = "none";
    settingsPage.style.display = "none";
    bmiSolve.style.display = "none";
}
function contact(){
    appBodyDisappear.style.display = "none";
    contactsPage.style.display = "block";
    settingsPage.style.display = "none";
    newCalPage.style.display = "none";
    newCalendar.style.display = "none";
    newNotes.style.display = "none";
    ATimer.style.display = "none";
    bmiSolve.style.display = "none";
}
function setting(){
    appBodyDisappear.style.display = "none";
    contactsPage.style.display = "none";
    settingsPage.style.display = "block";
    newCalPage.style.display = "none";
    newCalendar.style.display = "none";
    newNotes.style.display = "none";
    ATimer.style.display = "none";
    bmiSolve.style.display = "none";
}
