$(function(){
    

    $('.shop__btn').on('click', function(){
        $('.filters').slideToggle();
    });


    $('.menu__btn, .menu__list-link').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.related-products__slider').slick({
        slidesToShow: 4, 
        slidesToScroll: 4,
        infinite: false,
        prevArrow: '<button type="button" class="slick-prev"><svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-7.04646e-07 9.99982L3.20079 6.79907V9.3699H20V10.6298H3.20079V13.2007L-7.04646e-07 9.99982Z" fill="#A3BBC8"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 9.99982L16.7992 6.79907V9.3699H0V10.6298H16.7992V13.2007L20 9.99982Z" fill="#A3BBC8"/></svg></button>',
    });

    $('.product-details__top-item').on('click', function(e){
        e.preventDefault();

        $('.product-details__top-item').removeClass('product-details__top-item--active');
        $(this).addClass('product-details__top-item--active');

        $('.product-details__content-item ').removeClass('product-details__content-item--active');
        $($(this).attr('href')).addClass('product-details__content-item--active');
    });


    $('.product-details__counter').styler();

    $('.slider__small-items').slick({
        asNavFor: '.slider__big-items',
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        draggable: false,
      });
    $('.slider__big-items').slick({
        asNavFor: '.slider__small-items',
        draggable: false,
        arrows: false,
        fade: true,
        responsive: [
            {
              breakpoint: 975,
              settings: {
                dots: true,
              }
            }
        ]
    });

    $(".product-details__rating").rateYo({
        starWidth: "19px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true,
    });


    $('.cataloge__filter-btn').on('click', function(){
        $('.cataloge__filter-btn').removeClass('cataloge__filter-btn--active');
        $(this).addClass('cataloge__filter-btn--active');
    });

    $('.button-list').on('click', function(){
        $('.products-item').addClass('cataloge-item__list')
    });
    $('.button-grid').on('click', function(){
        $('.products-item').removeClass('cataloge-item__list')
    });

    $('.pagination__list-link').on('click', function(){
        $('.pagination__list-link').removeClass('pagination__list-link--active');
        $(this).addClass('pagination__list-link--active');
    });

    $(".rating").rateYo({
        starWidth: "12px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true,
    });

    $('.products-item__rating').rateYo({
        starWidth: "19px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true,
    });

    $(".filter-price__input").ionRangeSlider({
        type: "double",
        onStart: function (data) {
            $('.filters-price__from').text(data.from);
            $('.filters-price__to').text(data.to);
        },
        onChange: function (data) {
            $('.filters-price__from').text(data.from);
            $('.filters-price__to').text(data.to);
        },
    });
   

    $('.top-slider__items').slick({
        arrows: false,
        fade: true,
        dots: true,
    });


    var mixer = mixitup('.products__items');
    var mixer = mixitup('.design__blocks');
});