import '../assets/sass/main.sass';
import { lazyLoading } from '../lazyLoading/lazyLoading';

const $ = (className) => {
  const el = document.querySelector(className);
  return el;
};

const el = $('.slider');
const itemCount = getComputedStyle(el).getPropertyValue('--item-count');
const itemPerScreen = getComputedStyle(el).getPropertyValue('--item-per-screen');
const itemWidth = parseInt(getComputedStyle(el).width);
const slideWidth = itemWidth / parseInt(itemCount);
let translateX = 0;

const getCurrentTranslateX = () => {
  let transform = el.style.transform;
  const regExp = /\((.*?)\)/;
  return transform ? parseInt(transform.match(regExp)[1]) : 0;
}

const changeSlide = () => {
  return function (where) {
    switch (where) {
      case 'next':

        console.log('translateX',Math.abs(getCurrentTranslateX()))
        console.log('itemWidth',itemWidth )
        console.log('slideWidth',slideWidth ) 
        console.log('itemPerScreen',itemPerScreen ) 
        if (Math.floor(Math.abs(getCurrentTranslateX())) >= (itemWidth - (slideWidth * itemPerScreen) - slideWidth/2)) return;
        translateX -= itemWidth / itemCount
        changePosition(translateX);
        lazyLoading(4);
        break;
      case 'prev':
        if (translateX >= 0) return;
        translateX += itemWidth / itemCount
        changePosition(translateX);
        lazyLoading(4);
        break;
      default:
        return
    }
  }
}

function unify(e) {
  return e.changedTouches ? e.changedTouches[0] : e;
}

const dragAndDrop = () => {
  let locked = true;
  let clientXStart = null;
  let clientXEnd = null

  const dragStart = (ev) => {
    ev.preventDefault();
    locked = false;
    translateX = getCurrentTranslateX();
    clientXStart = unify(ev).clientX;
    lazyLoading(4);
  }

  const dragEnd = () => {
    el.classList.add('smooth');
    locked = true;
    if (translateX > itemWidth) {
      return el.style.setProperty('transform', `translate3d(${itemWidth}px, 0px, 0px)`);
    }

    if (Math.abs(clientXStart - clientXEnd) > slideWidth * 0.3 && clientXEnd !== null) {
      const round = (cb) => {
        return Math.abs(cb) * slideWidth;
      }
      const diff = clientXStart - clientXEnd;
      let tx;
      if (diff > 0) tx = round(Math.floor(getCurrentTranslateX() / slideWidth));
      if (diff < 0) tx = round(Math.ceil(getCurrentTranslateX() / slideWidth));
      changePosition(tx*-1)
      translateX = getCurrentTranslateX();
    }
    else {
      el.style.setProperty('transform', `translate3d(${translateX}px, 0px, 0px)`);
      translateX = getCurrentTranslateX();
    }
  }

  const dragLeave = () => {
    el.classList.add('smooth');
    locked = true;
    el.style.setProperty('transform', `translate3d(${translateX}px, 0px, 0px)`);
  }

  const dragOn = (e) => {
    e.preventDefault();
    if (!locked) {
      if (getCurrentTranslateX() >= slideWidth * 0.2) {
        el.classList.add('smooth');
        locked = true;
        changePosition(0);
        translateX = getCurrentTranslateX();
        clientXEnd = null
        return;
      }
      if (getCurrentTranslateX() <= -(itemWidth - slideWidth * itemPerScreen + slideWidth * 0.2)) {
        el.classList.add('smooth');
        locked = true;
        const tx = -(itemWidth - slideWidth * itemPerScreen)
        changePosition(tx);
        translateX = getCurrentTranslateX();
        clientXEnd = null
        return;
      }
      clientXEnd = unify(e).clientX;
      el.classList.remove('smooth');
      el.style.setProperty('transform', `translate3d(${translateX + (clientXEnd - clientXStart)}px, 0px ,0px)`);
    } else {
      return
    }
  }
  $('.slider').addEventListener('touchstart', dragStart);
  $('.slider').addEventListener('touchmove', dragOn);
  $('.slider').addEventListener('touchend', dragEnd);
  $('.slider').addEventListener('mousedown', dragStart);
  $('.slider').addEventListener('mouseup', dragEnd);
  $('.slider').addEventListener('mousemove', dragOn);
  $('.slider').addEventListener('mouseleave', dragLeave)
};

const changePosition = (tx) => {
  el.style.setProperty('transform', `translate3d(${tx}px,0px,0px)`);
  translateX = getCurrentTranslateX();
  let li = document.querySelectorAll('.pagination li');
  li = Array.prototype.slice.call(li);
  const liNum = Math.round(Math.abs(getCurrentTranslateX())/slideWidth)
  li.forEach( (li) =>  {
    li.classList.remove('active');
  })
  li[liNum].classList.add('active');
}

const pagination = () => {
  const count = Math.floor(itemCount - itemPerScreen + 1);
  const arr = new Array(count).fill('<li></li>');
  arr[0] = '<li class="active"></li>'
  $('.pagination').innerHTML=`<ul>${arr.join('')}</ul>`;
  let li = document.querySelectorAll('.pagination li');
  li = Array.prototype.slice.call(li);

  const onClickHandler  = (ev) => {
    let i = 0;
    li.forEach( (li, indx) =>  {
      li.classList.remove('active');
      if(ev.target === li) i = indx
    })
    ev.target.classList.add('active');
    lazyLoading(i);
    const tx = i*slideWidth*-1;
    changePosition(tx);

  }

  li.forEach((li) => {
    li.addEventListener('click', onClickHandler)
  })

}

const slider = changeSlide();

$('.next').addEventListener('click', () => slider('next'));

$('.prev').addEventListener('click', () => slider('prev'));

dragAndDrop();
pagination();

