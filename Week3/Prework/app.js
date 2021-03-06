// Global Variables
var imgOne = document.getElementById('imgOne');
var imgTwo = document.getElementById('imgTwo');
var imgOneCount = document.getElementById('imgOneCount');
var imgTwoCount = document.getElementById('imgTwoCount');
var images = [
    ['img/opt1.jpeg', 0],
    ['img/opt2.jpg', 0],
    ['img/opt3.jpg', 0],
    ['img/opt4.png', 0],
    ['img/opt5.jpg', 0]
];

// Functions
function getRand() {
  var a =  Math.floor(images.length * Math.random());
  // console.log (a);
  return a;
}
//add different image forcing to this function

function imgRefresh(a,b) {
  a.setAttribute('src', images[b][0]);
}

//Beginning State
var r = getRand();
var rr = getRand();
// if r === rr
imgRefresh(imgOne, r);
imgRefresh(imgTwo, rr);

//User Interaction
imgOne.addEventListener('click', function () {
  images[r][1] ++;
  // if length thingsSHown = length possible outcomes, reset thingsshown
  r = getRand();
  //if it was already there, reroll R
  //push r to thingsWeveShown
  imgRefresh(imgOne, r);
  imgOneCount.textContent = images[r][1];
}, false);
imgTwo.addEventListener('click', function () {
  images[rr][1] ++;
  rr = getRand();
  imgRefresh(imgTwo, rr);
  imgTwoCount.textContent = images[rr][1];
}, false);// imgOne.onclick = imgRefresh;
// imgTwo.onclick = imgRefresh;

//Something here to coerce things such that no two things can have the same image?
