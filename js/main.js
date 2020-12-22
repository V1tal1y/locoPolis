$(function () {

    $('.header__user-burger').click(function () {
        $('.nav__page').addClass('active')
    });
    $('.nav__page-close').click(function () {
        $(this).parents('.nav__page').removeClass('active')
    });

    $('.header__user-avatar').click(function (e) {
        if (!$(e.target).closest('.header__user-nav').length) {
            $(this).find('.header__user-nav').slideToggle('slow')
        }
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.header__user-avatar').length) {
            $('.header__user-nav').slideUp('slow')
        }
    });

    $(document).on("click", "[data-fancybox-close]", function () {
        $.fancybox.close();
    });


    $(document).on("click", ".popup__schedule-close", function () {
        $.fancybox.close();
    });
    
    $(document).on("click", ".js-open-popup-schedule", function () {
        var hrefEl = $(this).attr('href');
        $.fancybox({
            type: 'inline',
            href: hrefEl,
            // scrolling : 'visible',
            afterLoad: function () {
                $(".fancybox-overlay").addClass('popup__schedule');
            },
        });
    });

    $(document).on("click", ".js-open-popup-schedule", function () {
        var hrefEl = $(this).attr('href');
        $.fancybox({
            type: 'inline',
            href: hrefEl,
            // scrolling : 'visible',
            afterLoad: function () {
                $(".fancybox-overlay").addClass('popup__schedule');
            },
        });
    });

    $(document).on("click", ".js-open-popup-kviz, .county-questions__item .button", function () {
        var hrefEl = $(this).attr('href');
        $.fancybox({
            type: 'inline',
            href: hrefEl,
            afterLoad: function () {
                $(".fancybox-overlay").addClass('popup-kviz');
            },
        });
    });
    


    $(document).on("click", ".stars-parade__star", function () {
        var hrefEl = $(this).attr('href');
        $.fancybox({
            type: 'inline',
            href: hrefEl,
            // scrolling : 'visible',
            afterLoad: function () {
                $(".fancybox-skin").removeClass('fadeOutDown').addClass('zoomInDown animated stars-modal');
            },
            beforeClose: function () {
                $(".fancybox-skin").removeClass('zoomInDown').addClass('fadeOutDown animated');
            }
        });
    });

    $(document).on("click", ".popup__stars-btn-bot", function () {
        var hrefEl = $(this).attr('href');
        $.fancybox({
            type: 'inline',
            href: hrefEl,
            afterLoad: function () {
                $(".fancybox-skin").removeClass('fadeOut fadeIn animated').addClass('stars-modal');
            },
            beforeClose: function () {
                // $(".fancybox-skin").removeClass('fadeIn').addClass('fadeOut animated');
            }
        });
    });

    function readURL(input, imgEl) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();
        
            reader.onload = function(e) {
                imgEl.css('background-image', 'url('+e.target.result+')');
            };
        
            reader.readAsDataURL(input.files[0]);
        }
        else{
            imgEl.css('background-image', '');
        }
    }
    $(document).on("change", ".popup__stars-file input", function() {
        imgEl = $(this).next();
        readURL(this, imgEl);
    });
    
    $(document).on("keyup", ".popup__stars-textarea textarea", function() {
        var textareaL = $(this).val().length;
        console.log(textareaL)
        $(this).parent().find('.num').text(textareaL)
    });
    



});