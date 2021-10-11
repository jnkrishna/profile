//history.pushState(null, null, location.href);
//    history.back();
//    history.forward();
//    window.onpopstate = function ()
//    {
//        history.go(1);
//    };

function preventBack() {
    window.history.forward();
}
setTimeout("preventBack()", 0);
window.onunload = function () {
    null;
};



var preloader = document.getElementById('preloader');

window.addEventListener('load', function () {
    preloader.style.display = 'none';
});

var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg_color');
    } else {
        nav.classList.remove('bg_color', 'shadow');
    }
});


/*jslint browser: true*/
/*global $, jQuery, alert*/

$(window).click(function (e) {

    if ($(".navbar-collapse").hasClass("show")) {
        $('.navbar-collapse').removeClass("show");
        e.preventDefault();
    }
});
$('.navbar-collapse').click(function (event) {
    event.stopPropagation();
});



const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});


$('#navbar-nav').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing'
});



const banner_img = gsap.timeline({
        ease: "Power1.easeInOut"
    })
    .to(".banner_img .overlay", {
        duration: 0.5,
        y: "100%"
    })

const header = gsap.timeline({
        ease: "Power1.easeInOut"
    })
    .from("nav .navbar-brand", {
        duration: 1,
        y: -80
    })
    .from("nav .manubar-nav li", {
        duration: 1,
        y: -80,
        stagger: .1
    }, "-=0.4")


$('.single-item').slick({
    dots: false,
    autoplay: true,
    swipe: true,
    autoplaySpeed: 8000,
    lazyLoad: 'progressive',
    speed: 30,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    loop: true,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                dots: false,
                infinite: true
            }
},
        {
            breakpoint: 480,
            settings: {
                dots: false,
                infinite: true
            }
    }
    ]
});
var slickOptions = {
    arrows: false,

    adaptiveHeight: true,
    mobileFirst: true
};

$('.slick-element').slick(slickOptions);

$(window).on('resize orientationchange', function () {
    $('.slick-element').slick('unslick');
    $('.slick-element').slick(slickOptions);
});


$('.multiple-items').slick({
    infinite: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToShow: 2,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 600,
            settings: {
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToShow: 2,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }

  ]
});


//portfolio-part

var $grid = $('.portfolio-item').isotope({
    // options
});
// filter items on button click
$('.portfolio_menu').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});

$(document).ready(function () {
    $('.portfolio-item').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });
});

var portfolio_header = document.getElementById("portfolio_menu");
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active-btn");
        if (current.length > 0) {
            current[0].className = current[0].className.replace("active-btn", "");
        }
        this.className += " active-btn";
    });
}


//conteact-part
const form = document.getElementById('myForm');
const user_name = document.getElementById('user_name');
const email = document.getElementById('email');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();

});

function sendData(sRate, count) {

    if (sRate == count) {

        $('div#result').show();
        form.reset();
    } else {
        $('body').click(function () {
            $('div#result').hide();
        });

    }
}

function successMsg() {
    let formCon = document.getElementsByClassName('form_control_part');
    var count = formCon.length - 1;
    for (var i = 0; i < formCon.length; i++) {
        if (formCon[i].className == "form_control_part success") {
            var sRate = 0 + i;
            sendData(sRate, count);
        } else {
            return false;
        }
    }
}

function checkInputs() {
    const usernameValue = user_name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = messages.value.trim();

    if (usernameValue == "") {
        setErrorFor(user_name, 'User name cannnot be blank');

    } else if ((usernameValue.length <= 1) || (usernameValue.length > 20)) {
        setErrorFor(user_name, 'Please fill the full name');

    } else if (!isNaN(usernameValue)) {
        setErrorFor(user_name, 'Only Alphabats are allowed');

    } else {
        setSuccessFor(user_name);

    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');

    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');

    } else {
        setSuccessFor(email);

    }

    if (messageValue === '') {
        setErrorFor(messages, 'Message field cannnot be blank');

    } else {
        setSuccessFor(messages);

    }
    successMsg();


}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form_control_part error';
    small.innerHTML = message;

}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form_control_part success';

}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



AOS.init({
    once: true,
    disableMutationObserver: false,
    easing: 'liniear',
    disable: 'mobile',
    duration: 1000
});
