export const lazyLoading = (count) => {
  let lazyImg = document.querySelectorAll('.lazy');
  lazyImg = Array.prototype.slice.call(lazyImg);
  for(let i = 0 ; i<count; i++){
    if(lazyImg[i]){
      lazyImg[i].classList.remove('lazy');
      lazyImg[i].src = lazyImg[i].getAttribute('data-src');
    }
  }
};