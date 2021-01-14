'use strict';

var username = prompt('Hi! What is your name?');
alert('Welcome to my site' + username);
alert('Have a good time,' + userName +'!');

//write 5 questions. they MUST accept yes or no OR y or n IN ANY CASE
//examples: YES, yes, YEs, yeS, Y, y,

var questionOne = prompt('Do I live in Seattle?').toLowerCase();
alert('That is actually not the case ' + userName );
if (questionOne === 'no' || questionOne === 'n') {
  // console.log('you are correct. ');
}

var questionOne = prompt('Do I live in Washington State?').toLowerCase();
alert('Yes, that is correct! ' + userName );
if (questionOne === 'yes' || questionOne === 'y') {
  // console.log('you are correct. ');
}

var questionOne = prompt('What about snowboarding, do you think I do that?').toLowerCase();
alert('Yes, that is correct! ' + userName );
if (questionOne === 'yes' || questionOne === 'y') {
  // console.log('you are correct. ');
}

var questionOne = prompt('How about skateboarding, do you think I do that?').toLowerCase();
alert('Yes! That is actually how I became interested in snowboarding');
if (questionOne === 'yes' || questionOne === 'y') {
  // console.log('you are correct. ');
}

var questionOne = prompt('You are probably noticing a trend by now, so do you think I surf?').toLowerCase();
alert('No. Unfortunately it is too cold in Washington');
if (questionOne === 'no' || questionOne === 'n') {
  // console.log('you are correct. ');
}



