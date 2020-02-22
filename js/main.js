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
    var allService = [];
    var nameService,
        namePlan,
        Price;
    var textInfo = "";
    customer.click(function(e){
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
            $(this).parent().siblings().children().removeClass('active');
            $(this).parent().parent().siblings().find('.confirm').addClass('d-block');
        }
    })
    $('.service-pop .confirm').click(function(e){
        if($('.collapse-service .active i').hasClass('d-none')){
            $('.collapse-service .active i').removeClass('d-none').addClass('d-inline-block');
            nameService = $('.collapse-service .active').text().trim();
            namePlan = $('.service-pop .col-12.d-block .box.active .title').text();
            Price = $('.service-pop .col-12.d-block .box.active .price span').text();
            var tempservice = [];
            tempservice.push(nameService)
            tempservice.push(namePlan)
            tempservice.push(Price)
            allService.push(tempservice)
            var temptext = `<h3 class="text-center">${nameService}: ${namePlan} = ${Price}</h3>\n`;
            textInfo += temptext;
            $('#confirm .container')[0].innerHTML = textInfo;
        }
        if($('.collapse-service i.d-inline-block').length > 1){
            $('.service-pop .submit').addClass('d-block').removeClass('d-none');
            let total = 0;
            allService.forEach(x => {
                let z = parseFloat(x[2]);
                total += z;
            });
            $('.service-pop .total').addClass('d-block').removeClass('d-none');
            let lentotal = $('.service-pop .total p').length;
            for(let i = 0; i < lentotal; i++){
                $('.service-pop .total p')[i].innerText = total;
            }
            $('#confirm .container')[0].innerHTML += `<h3 class="text-center">Total: ${total}</h3>`;
        }
    })
    $('.service button').click(function(e){
       let x = $(this).siblings().find('span').text()
       $('#confirm .container')[0].innerHTML = `<h3 class="text-center">Price: ${x}</h3>`;
    })
})