$(document).ready(function () {
    // menu
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('nav').toggleClass('open');
       });

    // Tabs
    var clickedTab = $(".tabs > .active");
    var tabWrapper = $(".tab-content");
    var insetMenu = $(".tabs > li");
    var insetContent = $(".tab-content > div");
    var activeTab = tabWrapper.find(".active");
    var activeTabHeight = activeTab.outerHeight();
    activeTab.show();
    tabWrapper.height(activeTabHeight);
    $(insetMenu).on("click", function () {
        $(insetMenu).removeClass("active");
        $(this).addClass("active");
        clickedTab = $(".tabs .active");
        activeTab.fadeOut(250, function () {
            $(insetContent).removeClass("active");
            var clickedTabIndex = clickedTab.index();
            $(insetContent).eq(clickedTabIndex).addClass("active");
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

    var activBtn = $(".communication-menu__item--active");

    $(activBtn).hover(
        function() {
            $( this ).removeClass($(activBtn));
        }, function() {
            $( this ).addClass($(activBtn));
        }
    );

});













