import renderToDom from './render-to-dom';
import makeMessage from './make-message';

const waitTime = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Han pasado 3 segundos');
  }, 3000);
});

module.exports = {
  firstMessage: 'Hola mundo desde un modulo',
  delayedMessage: async () => {
    const message = await waitTime;
    const element = makeMessage(message);
    renderToDom(element);
  }
};
