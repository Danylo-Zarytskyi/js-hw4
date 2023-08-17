let summon = document.querySelector('.star');
let imgCont = document.querySelector('.img-cont');
let zra4ok1 = document.querySelector('.zra4ok1');
let zra4ok2 = document.querySelector('.zra4ok2');

document.addEventListener('mousemove', (ev) => {
    let x = ev.clientX * 100 / window.innerWidth + "%";
    let y = ev.clientY * 100 / window.innerHeight + "%";

   

    console.log(ev.x, ev.y);
   
})

summon.addEventListener('click', (ev) => {
    imgCont.classList.add('cat-moved');
})