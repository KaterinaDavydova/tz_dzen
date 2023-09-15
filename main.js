$('.vacancies__slider').slick({
    centerMode: true,
    arrows: false,
    centerPadding: '0px',
    slidesToShow: 5,
    focusOnSelect: true,
    speed: 500,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

$(function () {
    $('.reviews-block__content').slick({
        prevArrow: ".btnPic1",
        nextArrow: ".btnPic2"
    });
});


const showReview = document.getElementsByClassName('reviews-block__clickToShow');
const fullReview = document.getElementsByClassName('reviews-block__open');

for (i = 0; i < showReview.length; i++) {
    showReview[i].addEventListener('click', function () {
        this.classList.toggle('active')

    })
}


