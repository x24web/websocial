$(function () {
    "use strict";
    var Nav         = $('.navbar.navbar-dark'),
        $window     = $(window),
        list       = $('#number-list li');
    $('.navbar-toggler').click(function(){
        if (Nav.hasClass('scroll') && $window.scrollTop() <= 160) {
            Nav.removeClass("scroll");
        } else {
            Nav.addClass("scroll");
        }
    })
    $window.on("scroll", function () {
        if ($window.scrollTop() > 160) {
            Nav.addClass("scroll");
        } else {
            Nav.removeClass("scroll");
        }
    })
    $('.carousel').carousel({
        interval: 5000,
    })
    for(let i = 0; i < list.length; i++){
        var x = `<li><span>${i + 1}</span><p>${list[i].textContent}</p></li>`;
        $(x).insertAfter(list[i]);
        list[i].remove();
    }
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        autoplay:true,
        autoplayTimeout: 3400,
        autoplayHoverPause:true,
        nav:true
    })
    $('.plan .head a i').click(function(e){
        e.defaultprevented;
        $(this).toggleClass('fa-arrow-circle-down');
        $(this).parent().parent().parent().next().toggleClass('d-none')
        $(this).toggleClass('fa-arrow-circle-up');
        $(this).parent().parent().parent().next().toggleClass('d-block')
    })
    new WOW().init();
    // Service
    var singlesevice = $('.modal-content .collapse-service a');
    var dataTarget;
    var elservice;
    singlesevice.click(function(e){
        if($(this).hasClass('active')){
        }else{
            $(this).addClass('active');
            $(this).siblings().removeClass('active')
            dataTarget = $(this).data("target");
            elservice = $(dataTarget).parent().addClass('d-block').removeClass('d-none');
            elservice.siblings().addClass('d-none').removeClass('d-block');
            }
    })
    // customer service 
    var customer = $('.customer-service .box');
    customer.click(function(e){
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
            if($('.customer-service .box.active').length == 0){
                $('.service-pop .confirm').addClass('d-none').removeClass('d-block');
            }else{
                $('.service-pop .confirm').addClass('d-block').removeClass('d-none');
            }
        }else{
            $(this).removeClass('active');
            if($('.customer-service .box.active').length == 0){
                $('.service-pop .confirm').addClass('d-none').removeClass('d-block');
            }else{
                $('.service-pop .confirm').addClass('d-block').removeClass('d-none');
            }
        }
    })
})