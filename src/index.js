import './sass/main.sass'
console.log('hello world')
const $ = (className) => {
  const el = document.querySelector(className);
  return el;
};

let  i = 0;
$('.next').addEventListener('click', () => {
  const el = $('.slider');
  el.style.setProperty('--i', ++i)
})
