// start nav

let nav_items = document.querySelectorAll(".nav_i")
let line = document.querySelector(".line")


nav_items.forEach((item) => {
    item.onmouseover = () => {
        line.style.left = item.offsetLeft + "px"
        line.style.width = item.offsetWidth + "px"
    }
    item.onmouseout = () => {
        line.style.left = 0
        line.style.width = 0
    }
})


// end nav
//start slide

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4500); // Đổi hình sau 2 giây
}
// end slide

// validate 
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const submitButton = document.getElementById('submitButton');

usernameInput.addEventListener('input', validateUsername);
emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);

function validateUsername() {
    const username = usernameInput.value;
    const usernameError = document.getElementById('usernameError');

    if (username == '' || username.length < 5 || !/^[a-zA-Z0-9]+$/.test(username)) {
        usernameError.textContent = 'Username không hợp lệ';
    } else {
        usernameError.textContent = '';

    }

    toggleSubmitButton();
}

function validateEmail() {
    const email = emailInput.value;
    const emailError = document.getElementById('emailError');

    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        emailError.textContent = '';
    } else {
        emailError.textContent = 'Email không hợp lệ';
    }

    toggleSubmitButton();
}

function validatePhone() {
    const phone = phoneInput.value;
    const phoneError = document.getElementById('phoneError');

    if (/^[0-9]{10}$/.test(phone)) {
        phoneError.textContent = '';
    } else {
        phoneError.textContent = 'Số điện thoại không hợp lệ';
    }
    toggleSubmitButton();
}

function toggleSubmitButton() {
    const usernameError = document.getElementById('usernameError').textContent;
    const emailError = document.getElementById('emailError').textContent;
    const phoneError = document.getElementById('phoneError').textContent;

    if (usernameError === '' && emailError === '' && phoneError === '') {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'disabled');
    }
}

// hover img circle

let imgContainers = document.querySelectorAll('.img-boder')

for (let element of imgContainers) {
    element.querySelector('img').addEventListener('mouseenter', (e) => {
        e.target.style.filter = 'blur(4px)'
    })
    element.querySelector('img').addEventListener('mouseleave', (e) => {
        e.target.style.filter = 'blur(0)'
    })
}

// grid sinh thai hover

let endDay = new Date('10/20/2023 00:00:00').getTime();
let check = setInterval(() => {
    let now = new Date().getTime();
    let distance = endDay - now
    let day = Math.floor(distance / (24 * 60 * 60 * 1000));
    let hour = Math.floor(distance % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
    let minute = Math.floor(distance % (60 * 60 * 1000) / (60 * 1000));
    let second = Math.floor((distance % (60 * 1000)) / 1000);

    document.getElementById('day').innerText = day
    document.getElementById('hour').innerText = hour
    document.getElementById('minute').innerText = minute
    document.getElementById('second').innerText = second
}, 1000)