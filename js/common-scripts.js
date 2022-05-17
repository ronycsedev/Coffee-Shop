(function ($) {
    $(function () {



        $('.hamburger .hamburger-inner').click(function () {
            $("body").toggleClass("navShown");
        });
        

        $('#search-btn').click(function (e) {
            e.preventDefault();
            $(".search-form").toggleClass("active");
            $('.cart-items-container').removeClass('active'); 
        });


        $('#cart-btn').click(function(e){
            e.preventDefault();
            $('.cart-items-container').addClass('active');     
            $('.cart-close').click(function(){
                $('.cart-items-container').removeClass('active');
            })
            $(".search-form").removeClass("active");
        })

        

        // Our Products section

        $('.our-products-item-wrap').slick({
            autoplay: false,
            autoplaySpeed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,

            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        });
        

        // customer review section

        $('.review-item-wrap').slick({
            autoplay: true,
            autoplaySpeed: 1500,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots:true,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        });
        
        $('.navbar a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 100 },1000);
                    return false;
                }
            }
        }); 
    
        // Scroll Top
        $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
              $('#button').show();
            } else {
              $('#button').hide();
            }
          });
          
          $('#button').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '300');
        });

        $('.phn-nav').click(function () {
            $("body").toggleClass("navShown");
            $('.cart-items-container').removeClass('active');
        });


        if ($('.blogs-item-wrap').length) {
            $('.blogs-item-wrap').slick({
                autoplay: true,
                autoplaySpeed: 1500,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots:true,
                responsive: [
                    {
                            breakpoint: 767,
                            settings: 'unslick'
                    }
                ]
            })
        
            $(window).on('resize', function () {
                $('.blogs-item-wrap').slick('resize');
                });
        }

        if ($('.our-menu-item-wrap').length) {
            $('.our-menu-item-wrap').slick({
                autoplay: true,
                autoplaySpeed: 1500,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots:true,
                responsive: [
                    {
                            breakpoint: 767,
                            settings: 'unslick'
                    }
                ]
            })
        
            $(window).on('resize', function () {
                $('.our-menu-item-wrap').slick('resize');
                });
        }

        
     
        
        
        $('.pop-up-close').click(function () {
            $(".pop-up-wrap").toggleClass("pop-up-hidden");
        });

        $('.wedget ul li a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 100 },1000);
                    return false;
                }
            }
        });

            
        $('.scrolling-text-content').each(function () {
            var $$this = $(this);
            $(window).on('scroll', function () {
                var scrollText = $(this).scrollTop() / 1.5;
                $$this.css({ 'left': scrollText })
            })
        })


        $(".item-info").each(function(){
            var $this = $(this);
            $this.find(" > h3").on("click touch", function(){
                $(".item-info").removeClass("accordion-active")
                $(".coffee-info").slideUp();
                if($this.find(".coffee-info:visible").length){
                    $(".item-info").removeClass("accordion-active")
                    $(".coffee-info").slideUp();
                }
                else{
                    $this.addClass("accordion-active")
                    $(".coffee-info").slideUp();
                    $this.find(" > .coffee-info").slideDown();
                }
            })
        })
        

        $('.item-info > h3').click(function () {
            $('.item-info > h3').removeClass('active');
            $(this).addClass('active');
            $('.coffee-drink-item-thumb .coffee-info-thumb').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });


        $('#marque-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 2,
            centerPadding: '60px',
            autoplay: true,
            autoplaySpeed: 0,
            infinite: true,
            speed: 10000,
            cssEase:'linear',
            centerMode: true,
            variableWidth: true,
            pauseOnFocus: false,
            pauseOnHover: false,
            draggable: false,
            focusOnSelect:false,
            initialSlide:1,
            arrows:false,
          /*  swipeToSlide: true,*/

        })
    }) // End ready function.


})(jQuery)

