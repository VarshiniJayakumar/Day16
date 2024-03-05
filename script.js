document.addEventListener('DOMContentLoaded', function () {
    const countdownContainer = document.getElementById('countdown');

    // Countdown from 10 to 1
    countdownContainer.textContent = '10';

    setTimeout(function () {
        countdownContainer.textContent = '9';

        setTimeout(function () {
            countdownContainer.textContent = '8';

            setTimeout(function () {
                countdownContainer.textContent = '7';

                setTimeout(function () {
                    countdownContainer.textContent = '6';

                    setTimeout(function () {
                        countdownContainer.textContent = '5';

                        setTimeout(function () {
                            countdownContainer.textContent = '4';

                            setTimeout(function () {
                                countdownContainer.textContent = '3';

                                setTimeout(function () {
                                    countdownContainer.textContent = '2';

                                    setTimeout(function () {
                                        countdownContainer.textContent = '1';

                                        // Show "Happy Independence Day" after the countdown
                                        setTimeout(function () {
                                            countdownContainer.textContent = 'Happy Independence Day';
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
});
