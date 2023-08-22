let summon = document.querySelector('.star');
let imgCont = document.querySelector('.img-cont');
let zra4ok1 = document.querySelector('.zra4ok1');
let zra4ok2 = document.querySelector('.zra4ok2');
let b1 = document.querySelector('.b1');
let b2 = document.querySelector('.b2');
let b3 = document.querySelector('.b3');

b1.addEventListener('mousemove', (ev) => {
   
    zra4ok1.classList.toggle('zra4ok1-b1');
    zra4ok2.classList.toggle('zra4ok2-b1');
})

b2.addEventListener('mousemove', (ev) => {
   
    zra4ok1.classList.toggle('zra4ok1-b2');
    zra4ok2.classList.toggle('zra4ok2-b2');
})

b3.addEventListener('mousemove', (ev) => {
   
    zra4ok1.classList.toggle('zra4ok1-b3');
    zra4ok2.classList.toggle('zra4ok2-b3');
})

summon.addEventListener('click', (ev) => {
    imgCont.classList.add('cat-moved');
})