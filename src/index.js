
import { getGoods } from './ajax/ajax';
import { lazyLoading } from './lazyLoading/lazyLoading'
import { loop, addFeatures } from './slider/slider';

let isInit = false;

const removeLoader = () => {
  const loader = document.querySelector('.loader')
  loader.style.opacity = 0;
  setTimeout(() => {
    loader.style.display = 'none';
  }, 300)
}

document.addEventListener('scroll', (ev) => {
  if (ev.target.documentElement.scrollTop / ev.target.documentElement.clientHeight > 0.5 && isInit === false) {
    isInit = true;
    (async function init() {
      const goods = await getGoods();
      const slider = document.querySelector('.slider');
      const itemPerScreen = getComputedStyle(slider).getPropertyValue('--item-per-screen');
      slider.style.setProperty('--item-count', goods.length + itemPerScreen * 2);
      const goodsHTML = goods.map((good) => {
        return `
            <div class="slide">
            <div class="slide-wrapper">
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
              <a href="https://antosha33.github.io/slider" class="image">
                <img class="lazy" data-src="${good.img}" alt="">
              </a>
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
              <div class="footer">
              ${good.isExist ? 
              `<div class="counter">
              <div class="decrease">-</div>
              <div class="count">1</div>
              <div class="increase">+</div>
              </div>
              <button class="button">В корзину</div>
              </div>`:
              `<button class="button isnt-exist">Сообщить о ниличии</div>`
            }
              </div>
          </div>
        `  });
      slider.innerHTML = goodsHTML.join('');
      lazyLoading(4);
      addFeatures();
      loop();
      setTimeout(() => {
        removeLoader()
      }, 200)
    })()
  };
})





