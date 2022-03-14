const clickBtnSettings = document.querySelectorAll('.js-user-login');
const login = document.querySelector('.js-login');
const loginClose = document.querySelector('.js-login-close');
const loginContainer = document.querySelector('.js-login-container');

// Giển thị login (thêm class open)
function showLogin () {
    login.classList.add('open');
}

// tắt login (xóa class open)
function hideLogin () {
    login.classList.remove('open');
}
// lắng nghe từng hành vi click ở thể login

for (clickBtn of clickBtnSettings) {
    clickBtn.addEventListener('click', showLogin);
}

// Nghe hành vi vòa nút close
loginClose.addEventListener('click', hideLogin);

// click bên ngoài login để thoát
login.addEventListener('click', hideLogin);

loginContainer.addEventListener('click', function(envent) {
    envent.stopPropagation();
})

$(document).ready(function () {
  
    $(".slide-list").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      draggable: true,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
      dots: false,
      responsive: [
        {
          breakpoint: 2,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 5,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: false,
          },
        },
      ],
      // autoplay: true,
      // autoplaySpeed: 1000,
    });
  });

  $(document).ready(function () {
  
    $(".container-post-slider").slick({
      slidesToShow: 3.6,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      draggable: true,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
      dots: false,
      responsive: [
        {
          breakpoint: 2,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 5,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: false,
          },
        },
      ],
      // autoplay: true,
      // autoplaySpeed: 1000,
    });
  });

  $(document).ready(function () {
  
    $(".preview-container").slick({
      slidesToShow: 1.65,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      draggable: true,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
      dots: false,
      responsive: [
        {
          breakpoint: 2,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 5,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: false,
          },
        },
      ],
      // autoplay: true,
      // autoplaySpeed: 1000,
    });
  });

