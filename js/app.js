$(document).ready (function (){
  $('.slider').slick({
      slidesToShow:3,
      slidesToScroll:1,
      dots: true,
      prevArrow: false,
      nextArrow: false,
      autoplay: true,
      responsive:[
        {
            breakpoint:992,
            settings:{
                slidesToShow:1,
            }
        },
        {
            breakpoint:768,
            settings:{
                slidesToShow:1,
            }
        },
        {
            breakpoint:360,
            settings:{
                slidesToShow:1,
            }
        },
    ]
  });
  $('.slider-2').slick({
      slidesToShow:4,
      slidesToScroll:1,
      dots: true,
      prevArrow: false,
      nextArrow: false,
      autoplay: true,
      responsive:[
        {
            breakpoint:992,
            settings:{
                slidesToShow:1,
            }
        },
        {
            breakpoint:768,
            settings:{
                slidesToShow:1,
            }
        },
        {
            breakpoint:360,
            settings:{
                slidesToShow:1,
            }
        },
    ]
  });
})