(function ($) {
    'use strict';

    $(window).load(function () {

        /* Preloader */
        $('#preloader').fadeOut( 400, function () {
            $(this).remove();
        });

    });

    $(document).ready(function () {


        /* Sticky Scroll */

        $(".sticky-column").stickit({
            screenMinWidth: 1024    // apply if width >= 1024
        });

        /* Back to top */
        (function () {
            $("#back-top").hide();

            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#back-top').fadeIn();
                } else {
                    $('#back-top').fadeOut();
                }
            });

            $('#back-top a').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 600);
                return false;
            });
        })();

    });

})(jQuery);
