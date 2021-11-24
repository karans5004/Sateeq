CountDownTimer('01/01/2022 12:0 AM', 'newcountdown');

function CountDownTimer(dt, id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);

        day_0 = days.toString().split("")[1] ? days.toString().split("")[0] : 0
        day_1 = days.toString().split("")[1] ? days.toString().split("")[1] : days.toString().split("")[0]

        hr_0 = hours.toString().split("")[1] ? hours.toString().split("")[0] : 0
        hr_1 = hours.toString().split("")[1] ? hours.toString().split("")[1] : hours.toString().split("")[0]

        min_0 = minutes.toString().split("")[1] ? minutes.toString().split("")[0] : 0
        min_1 = minutes.toString().split("")[1] ? minutes.toString().split("")[1] : minutes.toString().split("")[0]

        document.getElementById("day_0").innerHTML = day_0;
        document.getElementById("day_1").innerHTML = day_1;

        document.getElementById("hr_0").innerHTML = hr_0;
        document.getElementById("hr_1").innerHTML = hr_1;

        document.getElementById("min_0").innerHTML = min_0;
        document.getElementById("min_1").innerHTML = min_1;

    }

    timer = setInterval(showRemaining, 1000);
}