/* var ask = document.querySelector('img');
ask.onclick = function() {
	var ans = prompt('like what you are seeing?');
	if(ans.toLowerCase()==="yes"){
		alert('you are awesome');
	}
	else {
		alert('you suck!');
	}
};
*/

var myimg = document.querySelector('img');
myimg.onclick = function() {
	var mysrc = myimg.getAttribute('src');
	if(mysrc==='images/gt4.jpg'){
		myimg.setAttribute('src','images/e90m3lmb.jpeg');
	}
	else {
		myimg.setAttribute('src','images/gt4.jpg');
	}
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName + '.';
};

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + storedName + '.';
};

myButton.onclick = function() {
	setUserName();
};