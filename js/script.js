// Activating dropdown menu
let dropNav = document.querySelector('.drop-nav');
let activeDropNav = document.querySelector('.active-drop-nav');
dropNav.addEventListener('click', (e) => {
    activeDropNav.classList.toggle('show-nav');
});
// Activating toggle button
let toggleBtn = document.querySelector(".toggle-btn");
let nav = document.querySelector('.nav');
let toggleIcon = document.querySelector('.fa-bars');
toggleBtn.onclick = () => {
    if (nav.style.display == 'none') {
        nav.style.display = 'flex';
        toggleIcon.classList.remove('fa-bars');
        toggleIcon.classList.add('fa-xmark');
    }
    else {
        nav.style.display = 'none';
        toggleIcon.classList.remove('fa-xmark');
        toggleIcon.classList.add('fa-bars');
    }
}
// Flashsale deadline
var deadline = new Date('Mar 26, 2023 23:59:00').getTime();
var countTime = setInterval (function() {
    var now = new Date().getTime();
    var different = deadline - now;
    var day = Math.floor(different/ (1000 * 60 *60 *24));
    var hour = Math.floor(different % (1000 * 60 *60 *24)/(1000*60*60));
    var minute= Math.floor(different % (1000 * 60 *60 )/(1000*60));
    var second = Math.floor(different % (1000 * 60 )/(1000));
    var teks = document.getElementById('time');
    time.innerHTML = '<i class="fa fa-bolt"></i> Flash sale berakhir pada: '+ day +' day ' + hour + ':'+ minute + ':'+ second;
    if (different == 0 ) {
        clearInterval(countTime);
        time.innerHTML = 'Flash sale telah Berakhir';
    }
}, 1000);
// Carousel
var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4) counter = 1;
}, 5000);
// Rubik's payment
var btn1 = document.querySelectorAll('div#rubik button');
btn1.onclick = function() {
    var a = confirm('yakin ingin beli?');
    if (a == true) document.location.href = 'pembayaran.html';
    else document.location.href = 'rubik.html';
}
// Accessoris's payment
var btn2 = document.querySelectorAll('div#Accessories button');
btn2.onclick = function() {
    var a= confirm('yakin ingin beli?');
    if ( a == true)document.location.href = 'pembayaran.html';
    else document.location.href = 'acessories.html';
}
// Flashsale's payment
var btn3 = document.querySelectorAll('div#flashsale button');
btn3.onclick = function() {
    var a = confirm('yakin ingin beli?');
    if ( a == true) document.location.href = 'pembayaran.html';
    else document.location.href = 'index.html';
}
// Date of copyright
let y = new Date().getFullYear();
document.querySelector('#date').innerHTML = y;
// Product's rating
let boxStar = document.querySelectorAll('.box-star');
for (let i = 0; i < boxStar.length; i++) {
    for(let j = 0; j < Number(boxStar[i].getAttribute("id"));j++) {
        boxStar[i].innerHTML += '<i class="fa fa-star" style="color:#dced17"></i>';
    }
    for(let k = 0; k < 5 - Number(boxStar[i].getAttribute("id")); k++) {
        boxStar[i].innerHTML += '<i class="fa fa-star" style="color:#5f5f5f"></i>';
    }
}