let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.slide');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    slide.appendChild(items[0].cloneNode(true));
    slide.removeChild(items[0]);
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    slide.insertBefore(items[items.length - 1].cloneNode(true), items[0]);
    slide.removeChild(items[items.length - 1]);
});
