$(document).ready(function () {
    // menu
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('nav').toggleClass('open');
       });

    // Tabs
    var clickedTab = $(".tabs > .active");
    var tabWrapper = $(".tab-content");
    var activeTab = tabWrapper.find(".active");
    var activeTabHeight = activeTab.outerHeight();
    activeTab.show();
    tabWrapper.height(activeTabHeight);
    $(".tabs > li").on("click", function () {
        $(".tabs > li").removeClass("active");
        $(this).addClass("active");
        clickedTab = $(".tabs .active");
        activeTab.fadeOut(250, function () {
            $(".tab-content > div").removeClass("active");
            var clickedTabIndex = clickedTab.index();
            $(".tab-content > div").eq(clickedTabIndex).addClass("active");
            activeTab = $(".tab-content > .active");
            activeTabHeight = activeTab.outerHeight();
            tabWrapper.stop().delay(50).animate({
                height: activeTabHeight
            }, 500, function () {
                activeTab.delay(50).fadeIn(250);
            });
        });
    });
    // Combobox
    var colorButton = $(".colors li");
    colorButton.on("click", function(){

        $(".colors > li").removeClass("active-color");
        $(this).addClass("active-color");

        var newColor = $(this).attr("data-color");

        $(".bg-color").css("background-color", newColor);
        $(".text-color").css("color", newColor);
    });
});

$(document).ready(function(){
    $('.communication-menu__item--active').hover(
        function() {
            $( this ).removeClass('communication-menu__item--active');
        }, function() {
            $( this ).addClass('communication-menu__item--active');
        }
    );
});









