import '../css/styles.css';
import { firstMessage, delayedMessage } from './message.js';
import platziImg from '../images/platzi.png';
import renderToDom from './render-to-dom';

import React from 'react';
import { render } from 'react-dom';
import data from './teachers.json';
import Teachers from './components/teachers';

render(<Teachers data={data} />, document.getElementById('container'));

data.teachers.forEach((teacher) => {
  const element = document.createElement('li');
  element.textContent = teacher.name;
  renderToDom(element);
});

document.write(firstMessage);
delayedMessage();

const img = document.createElement('img');
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('height', 50);
document.body.append(img);

console.log('Webpack con webpack.config...');
