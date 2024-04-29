var wakeuptime = 7;
var noon = 12;
var shopping = 12;
var relax = shopping + 2;
var rebelhuntingtime;
var workout = 18;

// getting it to show the current time on the page
var showcurrenttime = function()
{
    // display the string on the webpage
    var clock = document.getElementById("clock");

    var currenttime = new Date();

    var hours = currenttime.getHours();
    var minutes = currenttime.getMinutes();
    var seconds = currenttime.getSeconds();
    var meridian = "AM";

    // Set Hours
    if (hours >= noon)
    {
        meridian = "PM";
    }

    if (hours > noon)
    {
        hours = hours - 12;
    }
    if (hours === 0)  {
        hours = 12;
    }

    //Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that dispalys the time
    var clocktime = hours + ':' + minutes + ':' + seconds + " " +
    meridian + "!";

    clock.innerText = clocktime;
};

// Getting Clock to increment on its own and change out pictures
var updateclock = function()
{
    var time = new Date().getHours();
    var messageText;
    var image = "https://i.imgur.com/RAfeiU7.jpeg";

    var timeEventJS = document.getElementById("timeEvent");
    var Darthvaderimage1JS = document.getElementById('Darthvaderimage1');

    if (time == rebelhuntingtime)
    {
        image = "https://i.pinimg.com/736x/4d/36/1d/4d361ded1cebcf2a1f24491222c776ff.jpg";
        messageText = "Rebel Hunting Time!";
    }
    else if (time == wakeuptime)
    {
    image = "https://i.imgur.com/3yyzili.jpeg";
    messageText = "Wake up!";
    }
     else if (time == shopping)
    {
    image = "https://i.imgur.com/wr0vnUp.jpeg";
    messageText = "Let's go grocery shopping!";
    }
    else if (time == relax)
    {
    image = "https://i.imgur.com/csbg5Ys.jpg";
    messageText = "Time to relax!";
    }
    else if (time < noon)
    {
    image = "https://i.imgur.com/XfHGOyQ.png";
    messageText = "Good morning!";
    }
    else if (time >= workout)
    {
    image = "https://i.imgur.com/KZq0GJd.jpeg";
    messageText = "Time to workout!";
    }
    else
    {
    image = "https://i.imgur.com/RAfeiU7.jpeg"
    messageText = "Good afternoon!";
    }


    console.log(messageText, image); 
    timeEventJS.innerText = messageText;
    Darthvaderimage1JS.src = image;
    
    
    showcurrenttime();
};
updateclock();



var oneSecond = 1000;
setInterval( updateclock, oneSecond);

// Getting the Rebel Hunt Time Button To Work
var HuntingTimeButton = document.getElementById("RebelHuntingTimeButton");

var huntEvent = function()
{
    if (rebelhuntingtime < 0) 
    {
        rebelhuntingtime = new Date().getHours();
        HuntingTimeButton.innerText = "Hunt Over!";
        HuntingTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        rebelhuntingtime = -1;
        HuntingTimeButton.innerText = "Rebel Hunting Time!";
        HuntingTimeButton.style.backgroundColor = "#222";
    }
};

HuntingTimeButton.addEventListener("click", huntEvent)
huntEvent(); 

// Activates Wake-Up selector
var wakeupTimeSelector =  document.getElementById("wakeupTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeupTimeSelector.value;
};

wakeupTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var shoppingTimeSelector =  document.getElementById("shoppingTimeSelector");

var shoppingEvent = function()
{
    shopping = shoppingTimeSelector.value;
};

shoppingTimeSelector.addEventListener("change", shoppingEvent);


// Activates Relax Time selector
var relaxTimeSelector =  document.getElementById("relaxTimeSelector");

var relaxEvent = function()
{
    relax = relaxTimeSelector.value;
};

relaxTimeSelector.addEventListener("change", relaxEvent);


