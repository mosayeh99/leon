let menuIcon = document.querySelector('nav .menu-icon');
let menuList = document.querySelector('nav .links ul');
let menuLinks = document.querySelectorAll('nav .links ul li');
let scrollUpBtn = document.querySelector('.scrollup');

// ------------------window onload-----------------
window.onload = () => {
    loadBG(); // load header bg first
    getyear(); // get copyrights year
}

// ---------------Show & hide menu list----------------
menuIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    menuList.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (e.target != menuIcon && menuList) {
        menuList.classList.remove('active');
    }
});

// --------------Scroll to section onclick menulinks--------------
menuLinks.forEach((e) => {
    e.onclick = (el) => {
        el.preventDefault();
        document.querySelector(e.dataset.section).scrollIntoView({
            behavior: 'smooth'
        });
    }
});

// ---------------Scroll to top btn-----------------
window.onscroll = () => {
    if (window.scrollY > 600) {
        scrollUpBtn.style.display = 'block';
    } else {
        scrollUpBtn.style.display = 'none';
    }
}

scrollUpBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

/*  window onload function
    load header bg first
*/
function loadBG() {
    document.querySelector('.hello-sec').style.backgroundImage = 'url(images/bg.jpg)';
}

/*  window onload function
    get copyrights year
*/
function getyear() {
    let date = new Date();
    document.querySelector('.setyear').innerHTML = date.getFullYear();
}
