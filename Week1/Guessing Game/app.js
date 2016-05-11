console.log('Hello, world!');
var userName = prompt('What\'s your name?');
console.log('userName = ' + userName);

alert('Alright, ' + userName + ', I\'m going to ask you a couple of questions.');
var Score = 0;

//First question
var keepAsking = true;

while(keepAsking) {
  var userResponse = prompt('Was I born in Chicago?');
  console.log('userResponse = ' + userResponse);

  if (userResponse.toLowerCase() === 'n' || userResponse.toLowerCase() === 'no') {
    alert('Uh, maybe next time?');
    keepAsking = false;
  } else if (userResponse.toLowerCase() === 'y' || userResponse.toLowerCase() === 'yes') {
    alert('Great work! You read the words on the page!');
    keepAsking = false;
    Score ++;
    console.log('Score is currently ' + Score);
  } else {
    alert('Oh shucks, that\'s not a valid form of answer.');
  }
}

//Second question
keepAsking = true;

while(keepAsking) {
  var userResponse = prompt('Am I a cat owner?');
  console.log('userResponse = ' + userResponse);

  if (userResponse.toLowerCase() === 'n' || userResponse.toLowerCase() === 'no') {
    alert('Uh, maybe next time?');
    keepAsking = false;
  } else if (userResponse.toLowerCase() === 'y' || userResponse.toLowerCase() === 'yes') {
    alert('Great work! You keep reading the words on the page!');
    keepAsking = false;
    Score ++;
    console.log('Score is currently ' + Score);
  } else {
    alert('Oh shucks, that\'s not a valid form of answer.');
  }
}

//Third question
keepAsking = true;
var answeredCorrectly = false;

while(keepAsking) {
  var userResponse = prompt('What\'s my eventual goal?');
  console.log('userResponse = ' + userResponse);

  var splitResponse = userResponse.split(' ');
  console.log('User input split into ' + splitResponse);
  for (var i = 0; i < splitResponse.length; i++) {

    if (splitResponse[i].toLowerCase() != 'empire') {
      keepAsking = false;
    } else {
  //if (splitResponse[i].toLowerCase == 'empire')
      alert('Great work! You\'re sure reading those words!');
      answeredCorrectly = true;
    }
  }
  if (answeredCorrectly = true) {
    keepAsking = false;
    Score ++;
    console.log('Score is currently ' + Score);
  } else {
    alert('Uh, maybe try that one again?');
  }
}

//Fourth question

keepAsking = true;
var Tries = 0;

while(keepAsking && Tries < 4 ) {
  var userResponse = prompt('How old am I?');
  console.log('userResponse = ' + userResponse);

  if (isNaN(userResponse)) {
    alert('Oh shucks, that\'s not a valid form of answer. Could you use numerals?');
    Tries++;
  } else if (userResponse != 29) {
    Tries ++;
    console.log('Tries is currently ' + Tries);
    alert('Uh, maybe try that one again?');
    if (userResponse > 29) {
      alert('That seems a little high!');
    } else if (userResponse < 29){
      alert('That seems a litle low!');
    }
  } else if (userResponse == 29) {
    alert('Great work! That one took math!');
    keepAsking = false;
    Score ++;
    console.log('Score is currently ' + Score);
  }
}

//Fifth question

keepAsking = true;
answeredCorrectly = false;

while(keepAsking) {
  var userResponse = prompt('I mentioned two kinds of words I was good at. What\'s one of them?');
  userResponse = userResponse.toLowerCase();
  console.log('userResponse = ' + userResponse);

  var validResponses = ['pun','speech','puns','speeches'];
  for (var i = 0; i < validResponses.length; i++) {
    if (validResponses[i] == userResponse) {
      answeredCorrectly = true;
    } else {
      keepAsking = false;
    }
  }
  if (answeredCorrectly) {
    alert('Great work! You read the words on the page!');
    keepAsking = false;
    Score ++;
    console.log('Score is currently ' + Score);
  } else {
    alert('Uh, maybe next time.');
  }
}

//Sixth question
keepAsking = true;
var sixthAnswers = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'phasellus', 'ac'];
var correctAnswers = 0;

while(keepAsking) {
  var userResponse = prompt('What are two of my favorite lorem ipsum words?');
  console.log('userResponse = ' + userResponse);
  userResponse = userResponse.toLowerCase();
  splitResponse = userResponse.split(' ');
  console.log('User input split into ' + splitResponse);

  for (var i = 0; i < splitResponse.length; i++) {
    if (sixthAnswers.indexOf(splitResponse[i]) != -1) {
      correctAnswers++;
      console.log(i + ':correctAnswers is currently ' + correctAnswers);
    }
  }

  if (correctAnswers == 2) {
    keepAsking = false;
    alert('Great work! You read the words on the page!');
    Score ++;
    console.log('Score is currently ' + Score);
  } else if (correctAnswers > 2) {
    alert('Looks like you got a little over-enthusiastic! I only asked for two. I\'ll give you the point anyway.');
    Score ++;
    console.log('Score is currently ' + Score);
  } else {
    alert('Uh, maybe next time?');
    keepAsking = false;
  }
}

//Scoring

alert('Congratulations, ' + userName + '! You got ' + Score + ' out of 6 questions correct!');
