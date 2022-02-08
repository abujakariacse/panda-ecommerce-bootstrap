// h2 Tag er color change
const tags = document.getElementsByTagName('h2');
for (const tag of tags) {
    tag.style.color = 'tomato';
}
// Backpack id er background color change
const backpack = document.getElementById('backpack');
backpack.style.backgroundColor = '#6c757d04';

// Card gular border radius change kora
const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.style.borderRadius= '30px';
}

// Jekno ekta button a click korle console.log korbe 
document.getElementById('email-reset-btn').addEventListener('click',function(){
    console.log('Customer Clicked on Reset');
})

// Jetogula button ache sob select korte hbe. tarpor jekno button a click korle button hide hoye jabe
const buttons = document.getElementsByClassName('display-none-button');
for (const buttton of buttons) {
    buttton.addEventListener('click',function(){
        buttton.style.visibility = 'hidden';
    })
}

// Email box a 'abc@gmaiil.com' lekha thakle submit button enabled hbe
document.getElementById('email-box').addEventListener('keyup',function (e) {
    if(e.target.value == 'email'){
        document.getElementById('email-submit-btn').removeAttribute('disabled');
     }
     else{
         document.getElementById('email-submit-btn').setAttribute('disabled',true)
     }
})


// Image er upor mouseover korle image change hbe
function changeImage(){
   const image = document.getElementById('bag-1').src = 'https://i.ibb.co/9mP0tfy/download-removebg-preview.png';

}

// Email section a duble click korle background color change hbe
document.getElementById('subscribe').addEventListener('dblclick',function(){
    subscribe.style.backgroundColor = '#ff00007a';
})


// Extra
document.getElementById('email-box').addEventListener('focus',function(){
    subscribe.style.backgroundColor = '#0dcaf0';
})
document.getElementById('email-box').addEventListener('blur',function(){
    subscribe.style.backgroundColor = '#fceae8';

})

