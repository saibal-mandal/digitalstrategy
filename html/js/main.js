$('.client-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});

// brand...
$('.brand-slide').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots: false,
    autoplay:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
});

// portfolio...
$('.portfolio-slide').owlCarousel({
    rtl: true,
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});

// countries...
$('.contries-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay:true,
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