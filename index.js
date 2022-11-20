// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS DOM Introduction</h1>`;

// const idLecture = document.getElementById('myDomLecture');
// console.log(idLecture);

const classLecture = document.getElementsByClassName('test');
// console.log(classLecture);

classLecture[0].innerHTML = '<p>Hello World</p>';

let trackItem = 0;

console
  .log
  // classLecture[0].getAttribute('class'),
  // classLecture[0].setAttribute('class', 'xyz')

  // classLecture[0].classList.replace('test','xyz')
  // classLecture[0].classList.add('active')
  ();

const tagBased = document.getElementsByTagName('div');
// console.log(tagBased);

const caroselCards = document.getElementsByClassName('carosel');
const totalAvailableCards = caroselCards.length;

// Array.from(tagBased).forEach((item, index, arr) => console.log(item));

// Array.from(classLecture).forEach((item, index, arr) => console.log(item));

// const lecture2 = document.querySelector('#myDomLecture.test'); // looks a like css selectors
// console.log(lecture2);

// if reached -1 reset to maxlength of carosel

// if reached maxlength of carosel reset to 0;

document.getElementById('left-carosel-btn').addEventListener('click', () => {
  console.log('clicked left');

  // caroselCards[]
});

document.getElementById('right-carosel-btn').addEventListener('click', () => {
  console.log(caroselCards[trackItem]);

  caroselCards[trackItem].style.display = 'block';
  document.getElementById('#myCarosel').style.display = none;
});
