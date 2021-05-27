$(window).on("load", function() {

    $(".preloder").fadeOut(1000, function() {
        $(".preloaderImg").fadeOut(1250);
    });

    $(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

});

$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
    });

    $("[data-fancybox]").fancybox();

	$("#filters a").click(function() {

		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});

		return false;
	});

    const nav = $("#navigation");
    const navTop = nav.offset().top;
    console.log(navTop);
    console.log($(window).scrollTop())

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

        var body = $("body");

        if ($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        };
    };

    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50}, "slow");
    });

});
