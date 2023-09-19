$('.vacancies__slider').slick({
    centerMode: true,
    arrows: false,
    centerPadding: '0px',
    slidesToShow: 5,
    focusOnSelect: true,
    speed: 500,
    responsive: [
        // {
        //     breakpoint: 768,
        //     settings: {
        //         arrows: false,
        //         centerMode: true,
        //         centerPadding: '40px',
        //         slidesToShow: 3
        //     }
        // },
        // {
        //     breakpoint: 480,
        //     settings: {
        //         arrows: false,
        //         centerMode: true,
        //         centerPadding: '40px',
        //         slidesToShow: 1
        //     }
        // }
    ]
});

$(function () {
    $('.reviews-block__content').slick({
        prevArrow: ".btnPic1",
        nextArrow: ".btnPic2"
    });
});

let buttons = document.querySelectorAll(".reviews-block__clickToShow");
let content = document.querySelectorAll(".reviews-block__open");
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        let index = Array.prototype.indexOf.call(buttons, button);
        if (content[index].classList.contains('open')) {
            content[index].classList.remove('open');
            button.innerHTML = "Читати відгук повністю";
        }
        else {
            content[index].classList.add("open");
            button.innerHTML = "Згорнути відгук";
        }
    });
});