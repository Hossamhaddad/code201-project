'use strict';
var score = 0;
var team = prompt('my favorite football team is RealMadrid  ? ');
if (team.toLowerCase() === 'yes' || team.toLowerCase() === 'y') {
  alert('lol not a chance barcelona is the best ');
} else if (team.toLowerCase() === 'no' || team.toLowerCase() === 'n') {
  alert('correct answer ^_^'); score = score + 1;
} else {
  alert('wrong answer it should be yes,y or no, n');

}
//console.log('my favorite football team is bacrelona  ');
console.log(score);
var food = prompt('my favorite food is Mansafff ?');
if (food.toLowerCase() === 'yes' || food.toLowerCase() === 'y') {
  alert('who doesnt like it ^_^ true '); score = score + 1;
} else if (food.toLowerCase() === 'no' || food.toLowerCase() === 'n') {
  alert('its not your favorite ??!! :O too bad wrong answer ');
} else {
  alert('wrong answer it should be yes,y or no, n');

}
//console.log('my favorite food is Mansafff  ');
console.log(score);
var sport = prompt('my favorite sport is swimming ? ');
if (sport.toLowerCase() === 'yes' || sport.toLowerCase() === 'y') {
  alert('swimming is the best sport ever correct '); score = score + 1;
} else if (sport.toLowerCase() === 'no' || sport.toLowerCase() === 'n') {
  alert('its not your favorite ??!! bad answer:O');
} else {
  alert('wrong answer it should be yes,y or no, n');

}
//console.log('my favorite sport is swimming ^_^  ');
console.log(score);
var series = prompt('my favorite series is blacklist   ? ');
if (series.toLowerCase() === 'yes' || series.toLowerCase() === 'y') {
  alert('of course it is :D i mean who doesnt like it ?!  '); score = score + 1;
} else if (series.toLowerCase() === 'no' || series.toLowerCase() === 'n') {
  alert('its not your favorite ??!! :O wrong answer');
} else {
  alert('wrong answer it should be yes,y or no, n');

}
//console.log('my favorite series is blacklist  ');
console.log(score);
var fruit = prompt('my favorite fruit is mango ');
if (fruit.toLowerCase() === 'yes' || fruit.toLowerCase() === 'y') {
  alert('i really love mango :D correct'); score = score + 1;
} else if (fruit.toLowerCase() === 'no' || fruit.toLowerCase() === 'n') {
  alert('i dont like apple :P wrong answer ');
} else {
  alert('wrong answer it should be yes,y or no, n');

}
//console.log('my favorite fruit is mango');
console.log(score);
var inputNum;
var expectedNum = 11;
for (var i = 4; i>0 ; i--) {
  inputNum = parseInt(prompt('my favorite number 10-20 ?'+ i+'attempts left'));
  while (isNaN(inputNum) || inputNum === '') {
    inputNum = prompt('my favorite number 10-20 ?');
  }
  if (inputNum === expectedNum) {
    alert('thats correct');  score = score + 1; break;
  } else if (inputNum > expectedNum) {
    alert('too high ' );
  } else if (inputNum < expectedNum) {
    alert('too low ' );
  }

}
console.log(score);
var favBand = ['anathema', 'metallica', 'opeth'];
var bandInput;
for (var j = 1; j <= 6; j++) {
  bandInput = prompt('my favorite band is ?');
  var y = '0';
  for (var x = 0; x < favBand.length; x++) {
    if (bandInput.toLowerCase() === favBand[x]) {
      alert('thats correct '); y = '1'; score = score + 1; break;
    }
  }
  if (y === '1') break;

}
var bands='';
for(var t=0;t<favBand.length; t++){
  bands=bands+favBand[t]+',';
}
alert('my favorite bands : '+ bands);
alert('your score is :' + score+'/7');

// var userName = prompt('please enter your name ^_^');
// document.write('welcome to my page ' + userName + 'i hope you like it ');
// alert('my favorite football team is bacrelona  ');
// alert('my favorite food is Mansafff  ');
// alert('my favorite sport is swimming ^_^  ');
// alert('my favorite series is blacklist  ');
// alert('my favorite fruit is mango');
