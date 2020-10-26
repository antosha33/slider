import '../assets/sass/main.sass';
import { lazyLoading } from '../lazyLoading/lazyLoading';


const $ = (className) => {
  const el = document.querySelector(className);
  return el;
};

const el = $('.slider');
let itemCount;
let itemPerScreen;
let itemWidth;
let slideWidth;
let translateX;
let i = 0;

const getCurrentTranslateX = () => {
  let transform = el.style.transform;
  const regExp = /\((.*?)\)/;
  return transform ? parseInt(transform.match(regExp)[1]) : 0;
}

const changeSlide = where => {
  switch (where) {
    case 'next':
      i += 1;
      // if (Math.floor(Math.abs(getCurrentTranslateX())) >= (itemWidth - (slideWidth * itemPerScreen) - slideWidth/2)) return;
      translateX -= itemWidth / itemCount
      changePosition(translateX);
      lazyLoading(6);
      break;
    case 'prev':
      i -= 1;
      // if (translateX >= 0) return;
      translateX += itemWidth / itemCount
      changePosition(translateX);
      lazyLoading(6);
      break;
    default:
      return
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
      changePosition(tx * -1)
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
  // $('.slider').addEventListener('mouseleave', dragLeave)
};

const changePagination = () => {

  let li = Array.from(document.querySelectorAll('.pagination li'));
  i = (Math.abs(translateX) - Math.abs(itemPerScreen * slideWidth)) / slideWidth;
  if (i < 0) i = itemCount - (itemPerScreen * 2 + 1);
  // console.log(itemCount-itemPerScreen*2+2);




  // let liNum = Math.abs(getCurrentTranslateX()) / slideWidth;

  // if (getCurrentTranslateX() === itemPerScreen * slideWidth) liNum = itemPerScreen + 1;
  // if (Math.abs(getCurrentTranslateX()) === itemWidth - slideWidth * itemPerScreen * 2) liNum = 0;
  // if (Math.abs(getCurrentTranslateX()) > itemWidth - slideWidth * itemPerScreen * 2) liNum = Math.abs(getCurrentTranslateX()) / slideWidth
  // liNum = liNum % li.length;

  const liNum = i % (itemCount - itemPerScreen * 2);

  li.forEach((li) => {
    li.classList.remove('active');
  })
  li[liNum].classList.add('active');
}

const changePosition = (tx) => {
  el.classList.add('smooth');
  const loopTxBefore = itemWidth - slideWidth * 2 * itemPerScreen;
  const loopTxAfter = slideWidth * itemPerScreen;
  el.style.setProperty('transform', `translate3d(${tx}px,0px,0px)`);
  translateX = getCurrentTranslateX();
  
  changePagination();
  if (translateX === 0) {
    setTimeout(() => {
      el.classList.remove('smooth');
      el.style.setProperty('transform', `translate3d(${-loopTxBefore}px,0px,0px)`);
      translateX = getCurrentTranslateX();
    }
      , 200)
  }
  if (translateX === -(itemWidth - slideWidth * itemPerScreen)) {
    setTimeout(() => {
      el.classList.remove('smooth');
      el.style.setProperty('transform', `translate3d(${-loopTxAfter}px,0px,0px)`);
      translateX = getCurrentTranslateX();
    }
      , 200)
  }

}

const pagination = () => {
  const count = Math.floor(itemCount - itemPerScreen * 2);
  const arr = new Array(count).fill('<li></li>');
  arr[0] = '<li class="active"></li>'
  $('.pagination').innerHTML = `<ul>${arr.join('')}</ul>`;
  let li = document.querySelectorAll('.pagination li');
  li = Array.prototype.slice.call(li);

  const onClickHandler = (ev) => {
    let i = 0;
    li.forEach((li, indx) => {
      li.classList.remove('active');
      if (ev.target === li) i = indx
    })
    ev.target.classList.add('active');
    lazyLoading(i);
    const tx = i * slideWidth * -1;
    changePosition(tx);

  }

  li.forEach((li) => {
    li.addEventListener('click', onClickHandler)
  })

}

export const loop = () => {
  const beforeDuplicate = Array.from(document.querySelectorAll('.slide')).splice(0, itemPerScreen).map(node => node.cloneNode(true));
  const afterDuplicate = Array.from(document.querySelectorAll('.slide')).splice(-itemPerScreen).map(node => node.cloneNode(true));
  beforeDuplicate.forEach((node) => el.appendChild(node));
  afterDuplicate.reverse().forEach((node) => {
    el.insertBefore(node, el.firstChild)
  });
  el.style.setProperty('transform', `translate3d(${-beforeDuplicate.length * slideWidth}px,0px,0px)`);
  translateX = getCurrentTranslateX();
}

export const addFeatures = () => {
  itemCount = getComputedStyle(el).getPropertyValue('--item-count');
  itemPerScreen = getComputedStyle(el).getPropertyValue('--item-per-screen');
  itemWidth = parseInt(getComputedStyle(el).width);
  slideWidth = itemWidth / parseInt(itemCount);
  translateX = 0;
  $('.next').addEventListener('click', () => changeSlide('next'));
  $('.prev').addEventListener('click', () => changeSlide('prev'));
  dragAndDrop();
  pagination();
}




