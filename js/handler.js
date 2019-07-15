/*
    Countdown 
    © Sam Easton 2019
*/

function spinHourglass() {
    setTimeout(function () {
        hourglass.innerHTML = "⌛"
    }, 700)
    setTimeout(function () {
        hourglass.innerHTML = "⏳"
    }, 1400)
    setTimeout(function () {
        hourglass.innerHTML = "⌛"
    }, 2100)
    setTimeout(function () {
        hourglass.innerHTML = "⏳"
    }, 2800)
    setTimeout(function () {
        hourglass.innerHTML = "⌛"
    }, 3500)
}

var hourglass = document.getElementById("hourglass");
function initSite() {
    spinHourglass();
    setInterval(spinHourglass, 3500);

    setTimeout(function () {
        statusText.innerHTML = "Almost done..."
    }, 2000)

    setTimeout(function () {
        document.getElementById("init").classList.add("hidden");
        document.getElementById("timerApp").classList.remove("hidden");
    }, 3000)
}

var minutesHolder = document.getElementById("minutes");
var secondsHolder = document.getElementById("seconds");
var hoursHolder = document.getElementById("hours");
var sumTime = 0;

function updateClock() {
    console.log(sumTime);
    var hoursCounter = Math.floor(sumTime / 3600);
    var minutesCounter = Math.floor(sumTime % 3600 / 60);
    var secondsCounter = sumTime % 3600 % 60;

    if (hoursCounter < 10) {
        hoursHolder.innerHTML = "0" + hoursCounter;
    } else {
        hoursHolder.innerHTML = hoursCounter;
    }

    if (minutesCounter < 10) {
        minutesHolder.innerHTML = "0" + minutesCounter;
    } else {
        minutesHolder.innerHTML = minutesCounter;
    }

    if (secondsCounter < 10) {
        secondsHolder.innerHTML = "0" + secondsCounter;
    } else {
        secondsHolder.innerHTML = secondsCounter;
    }
}
function addTime(time) {
    sumTime = sumTime + time;
    updateClock()
}

function clearTime() {
    sumTime = 0;
    updateClock();
}

var paused = true;

function startClock() {
    if (!sumTime == 0) {
        paused = false;
        document.getElementById("start").style.display = "none";
        document.getElementById("clear").style.display = "none";
        document.getElementById("pause").innerHTML = "Pause"
        var clockUpdater = setInterval(function () {
            if (!paused) {
                sumTime = sumTime - 1
                updateClock();
                if (sumTime == 0) {
                    document.getElementById("timerApp").classList.remove("is-light");
                    setTimeout(function () { document.getElementById("timerApp").classList.remove("is-danger"); document.getElementById("timerApp").classList.add("is-light"); }, 2000)
                    document.getElementById("timerApp").classList.add("is-danger");
                    paused = true;
                    clearTime();
                }
            } else {
                clearInterval(clockUpdater)
            }
        }, 1000);
    }
}

function pause() {
    if (paused == false) {
        paused = true;
        setTimeout(function () { document.getElementById("start").style.display = "inline-flex"; document.getElementById("pause").style.display = "inline-flex" }, 1000);
        document.getElementById("pause").innerHTML = "Reset"
        document.getElementById("pause").style.display = "none";
    } else {
        sumTime = 0;
        paused = false;
        updateClock();
        document.getElementById("pause").innerHTML = "Pause"
        document.getElementById("clear").style.display = "inline-flex";
    }
}

initSite();
