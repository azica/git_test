// //// MENU

$( document ).ready(function(){
      $( "#menuToggle" ).click(function(){ // задаем функцию при нажатиии на элемент с классом toggle
        $( ".menu" ).toggle(5000, "linear"); //  скрываем, или отображаем все элементы <div>
        $("#menuToggle").toggleClass('open');
      });
      $( ".menuToggle" ).click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
        $( ".menu" ).slideToggle(5000, "linear"); // плавно скрываем, или отображаем все элементы <div>
      });
      
    });
$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('header').addClass('fixed_header');
        $('.top_header').addClass('top_header-dnone');
    }
    else {
        $('header').removeClass('fixed_header');
        $('.top_header').removeClass('top_header-dnone');
    }
});


//// SLIDER
$('#main_slider').owlCarousel({
    loop:true,
    nav:false,
    autoplay:false,
    lazyLoad: true,
    autoplayTimeout:2000,
    dots: false,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('#about_slider').owlCarousel({
    loop:true,
    nav:false,
    autoplay:false,
    autoplayTimeout:2000,
    dots: false,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('#team_slider').owlCarousel({
    loop:true,
    nav:false,
    margin:20,
    autoplay:false,
    autoplayTimeout:2000,
    dots: false,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
$('#testimonial_slider').owlCarousel({
    loop:true,
    nav:false,
    margin: 10,
    autoplay:false,
    autoplayTimeout:2000,
    dots: false,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


var owl = $('#testimonial_slider');
owl.owlCarousel();

// Go to the next item
$('.test_NextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})

// Go to the previous item
$('.test_PrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})



var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})


