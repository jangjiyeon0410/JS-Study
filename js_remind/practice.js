// settimeout, setinterval - 0331
const h3 = document.getElementById('h3');

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
    
    scrollBar.style.width = `${scrollTop}%`

    // if(scrollTop > height - 10){
    //     alert('읽기완료');
    // }

});
