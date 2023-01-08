import generateJoke from './generateJoke';
import './styles/main.scss';
import pillBottle from './assets/pillBottle.jpeg';

function component() {
  const element = document.createElement('div');

  element.innerText = generateJoke();
  return element;
}

console.log(1, 2, 3, pillBottle);
const myImg = new Image();
myImg.src = pillBottle;
myImg.classList.add('ima');

document.body.appendChild(myImg);

document.body.appendChild(component());
