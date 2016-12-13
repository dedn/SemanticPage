$(document).ready(function () {

    // Variables
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
            $(".tab-content > li").removeClass("active");
            var clickedTabIndex = clickedTab.index();
            $(".tab-content > li").eq(clickedTabIndex).addClass("active");
            activeTab = $(".tab-content > .active");
            activeTabHeight = activeTab.outerHeight();
            tabWrapper.stop().delay(50).animate({
                height: activeTabHeight
            }, 500, function () {
                activeTab.delay(50).fadeIn(250);
            });
        });
    });
    // Variables
    var colorButton = $(".colors li");

    colorButton.on("click", function(){

        // Remove class from currently active button
        $(".colors > li").removeClass("active-color");

        // Add class active to clicked button
        $(this).addClass("active-color");

        // Get background color of clicked
        var newColor = $(this).attr("data-color");

        // Change background of everything with class .bg-color
        $(".bg-color").css("background-color", newColor);

        // Change color of everything with class .text-color
        $(".text-color").css("color", newColor);
    });
});