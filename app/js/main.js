$(function () {
//Menu
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('nav').toggleClass('open');
    });
});

//Hiden Section Menu
$(function () {
    $(".main-nav a").click(function () {
        $(".hiden-section").toggleClass("hidden");
    })
});

//View shose hiden section
$('.visibility-shoos-1').hover(
    function () {
        $(".cont-1").addClass('demonstartion-cont-visibility')
    },
    function () {
        $(".cont-1").removeClass('demonstartion-cont-visibility')
    }
);

$('.visibility-shoos-2').hover(
    function () {
        $(".cont-2").addClass('demonstartion-cont-visibility')
    },
    function () {
        $(".cont-2").removeClass('demonstartion-cont-visibility')
    }
);
$('.visibility-shoos-3').hover(
    function () {
        $(".cont-3").addClass('demonstartion-cont-visibility')
    },
    function () {
        $(".cont-3").removeClass('demonstartion-cont-visibility')
    }
);
$('.visibility-shoos-3').hover(
    function () {
        $(".cont-3").addClass('demonstartion-cont-visibility')
    },
    function () {
        $(".cont-3").removeClass('demonstartion-cont-visibility')
    }
);
$('.visibility-shoos-4').hover(
    function () {
        $(".cont-4").addClass('demonstartion-cont-visibility')
    },
    function () {
        $(".cont-4").removeClass('demonstartion-cont-visibility')
    }
);
$('.visibility-shoos-5').hover(
    function () {
        $(".cont-5").addClass('demonstartion-cont-visibility')
    },
    function () {
        $(".cont-5").removeClass('demonstartion-cont-visibility')
    }
);


$('.look').hover(
    function () {
        $(".overlay1").addClass('overlay-visiblity')
    },
    function () {
        $(".overlay1").removeClass('overlay-visiblity')
    }
);

$('.look').hover(
    function () {
        $(".overlay2").addClass('overlay-visiblity')
    },
    function () {
        $(".overlay2").removeClass('overlay-visiblity')
    }
);

$('.look').hover(
    function () {
        $(".overlay3").addClass('overlay-visiblity')
    },
    function () {
        $(".overlay3").removeClass('overlay-visiblity')
    }
);


//Bxslider
$(document).ready(function () {
    $('.bxslider').bxSlider({
        pager: false,
        responsive: true,
        auto: true,
        pause: 4000,
        controls: false

    });

});

//Map
$('.map-btn').click(
    function () {
        $(".map-overlay").addClass('hidden')
    }
);


//NiceSelect
$(document).ready(function () {
    $('select').niceSelect();
});


//Product-View
$('.view-activ').hover(
    function () {
        $(".view").addClass('view-visibility')
    },
    function () {
        $(".view").removeClass('view-visibility')
    }
);


$('.view-activ-1').hover(
    function () {
        $(".view-1").addClass('view-visibility')
    },
    function () {
        $(".view-1").removeClass('view-visibility')
    }
);

$('.view-activ-2').hover(
    function () {
        $(".view-2").addClass('view-visibility')
    },
    function () {
        $(".view-2").removeClass('view-visibility')
    }
);

$('.view-activ-3').hover(
    function () {
        $(".view-3").addClass('view-visibility')
    },
    function () {
        $(".view-3").removeClass('view-visibility')
    }
);


//Map Product Section


$('.map').hover(
    function () {
        $(".map-product-overlay").addClass('hidden').stop().fadeTo("fast", 0)
    },
    function () {
        $(".map-product-overlay").removeClass('hidden').stop().fadeTo("slow", 1)
    }
);


// Star Rating
$(".my-rating-4").starRating({
    totalStars: 5,
    emptyColor: 'lightgray',
    hoverColor: 'salmon',
    activeColor: 'cornflowerblue',
    initialRating: 5,
    starSize: 15,
    strokeWidth: 0,
    useGradient: false,
    callback: function (currentRating, $el) {
        alert('rated ', currentRating);
        console.log('DOM element ', $el);
    }
});

//button hover product
$('input[name="wishlist"]').hover(
    function () {
        $('input[name="cart"]').addClass('activ-wishlist').stop().fadeTo("fast", 0)
    },
    function () {
        $('input[name="cart"]').removeClass('activ-wishlist').stop().fadeTo("slow", 1)
    }
);

//hover section basket

$('.basket-section').hover(
    function () {
        $(".overlay-basket").addClass('hidden').stop().fadeTo("fast", 0)
    },
    function () {
        $(".overlay-basket").removeClass('hidden').stop().fadeTo("slow", 0.8)
    }
);


//Add (+/-) Button Number 
jQuery(document).ready(function () {
    // This button will increment the value
    $('.qtyplus').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });
});
