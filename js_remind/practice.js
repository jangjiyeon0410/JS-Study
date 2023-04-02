// settimeout, setinterval - 0331
// const h3 = document.getElementById('h3');

// setTimeout(function(){
//     h3.style.display = 'none';
// }, 1000);

// setInterval(function(){
//     console.log('hello')
// }, 1000);

// setTimeout(hello, 1000);
// function hello(){
//     console.log('hello'); 
// }

// const h4 = document.querySelector('#h4');
// let countdown = Number(h4.innerHTML);


// let timer = setInterval(function(){
//     countdown--;
//     h4.innerHTML = countdown;

//     if(countdown == 0){
//         clearInterval(  timer);
//     }
// }, 1000);


// 스크롤바 -0401
const h1 = document.querySelector('h1');
const lorem = document.querySelector('.lorem');

window.addEventListener('scroll', function (){
    let scroll = window.scrollY;
    if(scroll > 100){
        h1.style.fontSize = "1.5em"
    }else if(scroll<100){
        h1.style.fontSize = "2em"
    };
});

let scrollBar = document.querySelector('.scrollBar');

lorem.addEventListener('scroll', function (){
    let scrollTop = lorem.scrollTop;
    // const height = lorem.clientHeight;
    console.log(scrollTop)
    
    scrollBar.style.width = `${scrollTop*4}px`

    // if(scrollTop > height - 10){
    //     alert('읽기완료');
    // }

});


// tab menu - 0402
const button = document.querySelectorAll('.button');
const content = document.querySelectorAll('.content');

for (let i =0; i<button.length; i++){
    button[i].addEventListener('click', function (){
        button.forEach(function(e){
            console.log(e)
            e.classList.remove('on');
        });
        button[i].classList.add('on');

        content.forEach(function(e){
            e.classList.remove('show');
        });
        content[i].classList.add('show');
    });
};

// modal
const modalBtn = document.querySelector('#modalBtn');
const bg = document.querySelector('.bg');
const modalPopup = document.querySelector('#modalPopup');

modalBtn.addEventListener('click', function(){
    modalPopup.classList.add('show');

    // e.target // 유저가 실제로 누른 것
    // e.currentTarget // 이벤트 리스너 달린 곳 -> this
    // e.stopPropagation // 내 상위요소로 이벤트 버블링 막음
});

bg.addEventListener('click', function(e){
    console.log(e.target)
    if(e.target == bg){
        modalPopup.classList.remove('show');
    }
});