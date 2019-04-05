const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItem = document.querySelector('.carousel-item');

const items = document.querySelectorAll('.carousel-item');

let count = 0;

const ITEM_WIDTH = 720;
const ITEMS_QTY = items.length;

carouselInner.style.width = `${ITEM_WIDTH * ITEMS_QTY}px`;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', e => {
  alternate(e, items, 'next')
})

prev.addEventListener('click', e => {
  alternate(e, items, 'prev')
})

function alternate(e, nodes, action) {
  if(action == 'next') {
    if(count == items.length - 1) {
      e.preventDefault();
    } else {
      count += 1;
      nodes[count - 1].style.transform = `translateX(-${ITEM_WIDTH * count}px)`
      nodes[count].style.transform = `translateX(-${ITEM_WIDTH * count}px)`
    }
  }
  
  if(action == 'prev') {
    if(count == 0) {
      e.preventDefault();
    } else {
      nodes[count].style.transform = `translateX(-${(ITEM_WIDTH * count) - ITEM_WIDTH}px)`
      count -= 1;
      nodes[count].style.transform = `translateX(-${ITEM_WIDTH * count}px)`
    }
  }
}