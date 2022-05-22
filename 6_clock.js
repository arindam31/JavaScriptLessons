const hoursHand = document.querySelector('#hoursHand');
const minutesHand = document.querySelector('#minutesHand');
const secondsHand = document.querySelector('#secondsHand');

var date = new Date();
let hr = date.getHours();
let minute = date.getMinutes();
let seconds = date.getSeconds();

let hrPos = hr*360/12;
let minutePos = (minute*360/60) + (seconds*(360/60)/60);
let secondsPos = seconds * 360/60;

function rotate(){
	hrPos = hrPos + (3/360);
	minutePos = minutePos + (6/60);
	secondsPos = secondsPos + 6;

	secondsHand.style.transform = 'rotateZ(' + secondsPos + 'deg)';
	minutesHand.style.transform = 'rotateZ(' + minutePos + 'deg)';
	hoursHand.style.transform = 'rotateZ(' + hrPos + 'deg)';
}

var interval = setInterval(rotate, 1000);
