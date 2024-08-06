let intervalId;
let buttonIndex = 0;

function clickAttendanceLink() {
    const applyButtons = document.querySelectorAll('td[style="text-align: center;"] > a > img[src="../../../assets/Logo/Apply.png"]');
    
    if (applyButtons.length === 0) {
        console.log('No apply buttons found');
        return;
    }

    if (buttonIndex >= applyButtons.length) {
        buttonIndex = 0;
    }

    const currentButton = applyButtons[buttonIndex];
    currentButton.parentElement.click();
    console.log('Clicked apply button ' + (buttonIndex + 1) + ' at: ' + new Date().toLocaleTimeString());

    buttonIndex++;
}

function startClicking() {
    intervalId = setInterval(clickAttendanceLink, 1000);
    console.log('Started clicking attendance buttons');
}

function stopClicking() {
    clearInterval(intervalId);
    console.log('Stopped clicking attendance buttons');
}

startClicking();