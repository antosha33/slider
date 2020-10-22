import './slider/slider';

import { getGoods } from './ajax/ajax';
import {lazyLoading} from './lazyLoading/lazyLoading'
import {loop} from './slider/slider'

(async function init() {
  const goods = await getGoods();
  // console.log(result);
  const goodsHTML = goods.map((good) => {
    return `
        <div class="slide">
        <div class="slider-wrapper">
          <div class="labels">
            <div class="label">
              <div class="promo">
                <span>Акция -25%</span>
              </div>
            </div>
            <div class="label">
              <div class="latest">
                <span>
                  Новинка
                </span>
              </div>
            </div>
            <div class="label">
              <div class="recommendation">
                <span>
                  Рекомендуем
                </span>
              </div>
            </div>
          </div>
          <div class="image">
            <img class="lazy" data-src="${good.img}" alt="">
          </div>
          <div class="info">
            <div class="status">
              
              ${good.isExist ? '<div class="existing "> В наличии </div>' : '<div class="existing existing-false"> Нет в наличии </div>'}
              
              <div class="code">
                Код: ${good.code}
              </div>
            </div>
            <div class="text">
              <p>
                ${good.text}
              </p>
            </div>
            <div class="cart">
              <div class="price">${good.price} р.</div>
              <div class="old-price">${good.oldPrice} р.</div>
              <div class="add-to-cart"><div class="cart-count">4</div></div>
            </div>
          </div>
        </div>
      </div>
    `  });
  document.querySelector('.slider').innerHTML = goodsHTML.join('');
  lazyLoading(4);
  loop();
})()


