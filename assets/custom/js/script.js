(function ($) {
    'use strict';

    $(window).load(function () {

        /* Preloader */
        $('#preloader').fadeOut( 400, function () {
            $(this).remove();
        });

    });

    $(document).ready(function () {

        $('#fotorama-dornroeschen').fotorama({
            data: [
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_6657-Prolog.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_6664-Prolog.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_6678-Prolog.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_6680-Prolog.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_6734-Prolog.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_6754-Prolog.JPG'},


                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_6767-Akt1.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_6780-Akt1.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_6795-Akt1.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_6826-Akt1.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_6856-Akt1.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_6879-Akt1.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_6915-Akt1.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_6945-Akt1.JPG'},



                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_6965-Akt2.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_6980-Akt2.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_7013-Akt2.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_7022-Akt2.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_7046-Akt2.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_7089-Akt2.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_7121-Akt2.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_7150-Akt2.JPG'},

                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_7177-Akt3.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_7192-Akt3.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_7338-Akt3.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_7370-Akt3.JPG'},
                {img: '/assets/custom/images/pics/dornroeschen2016/IMG_7483-Akt3.JPG'}


            ]
        });

        $('#fotorama-fasching').fotorama({
            data: [
                {img: '/assets/custom/images/pics/fasching2016/f1.jpg'},
                {img: '/assets/custom/images/pics/fasching2016/f2.jpg'},
                {img: '/assets/custom/images/pics/fasching2016/f3.jpg'},
                {img: '/assets/custom/images/pics/fasching2016/f4.jpg'},
                {img: '/assets/custom/images/pics/fasching2016/f5.jpg'}
            ]
        });


        $('#fotorama-sommerfest').fotorama({
            data: [
                {img: '/assets/custom/images/pics/sommerfest2015/s1.jpg'},
                {img: '/assets/custom/images/pics/sommerfest2015/s2.jpg'},
                {img: '/assets/custom/images/pics/sommerfest2015/s3.jpg'},
                {img: '/assets/custom/images/pics/sommerfest2015/s4.jpg'},
                {img: '/assets/custom/images/pics/sommerfest2015/s5.jpg'},
                {img: '/assets/custom/images/pics/sommerfest2015/s6.jpg'},
                {img: '/assets/custom/images/pics/sommerfest2015/s7.jpg'},
                {img: '/assets/custom/images/pics/sommerfest2015/s8.jpg'},
                {img: '/assets/custom/images/pics/sommerfest2015/s9.jpg'},
                {img: '/assets/custom/images/pics/sommerfest2015/s10.jpg'},
                {img: '/assets/custom/images/pics/sommerfest2015/s11.jpg'}

            ]
        });





        /* Sticky Scroll */

        $(".sticky-column").stickit({
            screenMinWidth: 1024    // apply if width >= 1024
        });
        

        /* Contact Form */
        (function () {
            // Get the form.
            var form = $('#ajax-contact');

            // Get the messages div.
            var formMessages = $('#form-messages');

            // Set up an event listener for the contact form.
            $(form).submit(function (e) {
                // Stop the browser from submitting the form.
                e.preventDefault();

                // Serialize the form data.
                var formData = $(form).serialize();

                // Submit the form using AJAX.
                $.ajax({
                        type: 'POST',
                        url: $(form).attr('action'),
                        data: formData
                    })
                    .done(function (response) {
                        // Make sure that the formMessages div has the 'success' class.
                        $(formMessages).removeClass('alert alert-danger');
                        $(formMessages).addClass('alert alert-success');

                        // Set the message text.
                        $(formMessages).text(response);

                        // Clear the form.
                        $('#name').val('');
                        $('#email').val('');
                        $('#message').val('');
                    })
                    .fail(function (data) {
                        // Make sure that the formMessages div has the 'error' class.
                        $(formMessages).removeClass('alert alert-success');
                        $(formMessages).addClass('alert alert-danger');

                        // Set the message text.
                        if (data.responseText !== '') {
                            $(formMessages).text(data.responseText);
                        } else {
                            $(formMessages).text('Oops! An error occured and your message could not be sent.');
                        }
                    });
            });

        })();
        


        /* Google map */
        (function () {
            if (!$('#google-map').length) {
                return false;
            }

            initGmap();

            function initGmap() {

                // Create an array of styles.
                var styles = [
                    {
                        stylers: [
                            {saturation: -100}
                        ]
                    }, {
                        featureType: "road",
                        elementType: "geometry",
                        stylers: [
                            {lightness: 100},
                            {visibility: "simplified"}
                        ]
                    }, {
                        featureType: "road",
                        elementType: "labels",
                        stylers: [
                            {visibility: "off"}
                        ]
                    }
                ];

                // Create a new StyledMapType object, passing it the array of styles,
                // as well as the name to be displayed on the map type control.
                var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

                // Create a map object, and include the MapTypeId to add
                // to the map type control.
                var $latlng = new google.maps.LatLng(48.1240823,11.655924099999993),
                    $mapOptions = {
                        zoom: 13,
                        center: $latlng,
                        panControl: false,
                        zoomControl: true,
                        scaleControl: false,
                        mapTypeControl: false,
                        scrollwheel: false,
                        mapTypeControlOptions: {
                            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                        }
                    };
                var map = new google.maps.Map(document.getElementById('google-map'), $mapOptions);

                google.maps.event.trigger(map, 'resize');

                //Associate the styled map with the MapTypeId and set it to display.
                map.mapTypes.set('map_style', styledMap);
                map.setMapTypeId('map_style');

                var marker = new google.maps.Marker({
                    position: $latlng,
                    map: map,
                    title: ""
                });

            }

        })();

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

        // Dropdown on Hover
        // $('.navbar .dropdown').hover(function() {
        //     $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
        // }, function() {
        //     $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105)
        // });


    });



    /* Google Analytics */
    (function (i, s, o, g, r, a, m) {
       i['GoogleAnalyticsObject'] = r;
       i[r] = i[r] || function () {(i[r].q = i[r].q || []).push(arguments)};
       i[r].l = 1 * new Date();
       a = s.createElement(o);
       m = s.getElementsByTagName(o)[0];
       a.async = 1;
       a.src = g;
       m.parentNode.insertBefore(a, m);
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-40696437-15', 'auto');
    ga('send', 'pageview');

})(jQuery);
