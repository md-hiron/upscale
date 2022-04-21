(function($){
    $(document).ready(function(){
        $('.menu-toggle i').on('click', function(){
            $('.navigation').slideToggle();
        });

        $('.solution-slider').slick({
            slidesToShow: 3,
            arrows: false,
            dots: true,
            dotsClass: 'solution-dots',
            autoplay: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings:{
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings:{
                        slidesToShow: 1
                    }
                }
            ]
        });

        $('.testimony-slider').slick({
            arrows: false,
            dots: true,
            dotsClass: 'testi-dots',
            vertical: true,
            autoplay: true
        });

        $('select').niceSelect();

        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 500,
            values: [ 75, 300 ],
            slide: function( event, ui ) {
              $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
          });
          $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
            " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    });
})(jQuery);