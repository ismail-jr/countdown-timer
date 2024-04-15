var timerInterval;
    var timerElement = document.getElementById("timer");
    var startButton = document.getElementById("start");
    var stopButton = document.getElementById("stop");
    var resetButton = document.getElementById("reset");

    // Function to start the timer
    function startTimer(duration) {
        var timer = duration;
        timerInterval = setInterval(function () {
            var hours = Math.floor((timer / (60 * 60)) % 24);
            var minutes = Math.floor((timer / 60) % 60);
            var seconds = Math.floor(timer % 60);

            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;

            timerElement.textContent = hours + ":" + minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(timerInterval);
                timerElement.textContent = "00:00:00";
            }
        }, 1000);
    }

    // Event listener for start button
    startButton.addEventListener("click", function() {
        clearInterval(timerInterval); // Clear any existing interval
        startTimer(60); // Start the timer with 60 seconds (change as needed)
    });

    // Event listener for stop button
    stopButton.addEventListener("click", function() {
        clearInterval(timerInterval); // Stop the timer
    });

    // Event listener for reset button
    resetButton.addEventListener("click", function() {
        clearInterval(timerInterval); // Stop the timer
        timerElement.textContent = "00:00:00"; // Reset the timer display
    });