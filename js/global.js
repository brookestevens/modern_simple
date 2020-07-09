(function($){
    let nav = $('.region-primary-menu');
    let sticky = nav.offset().top;
    window.addEventListener('scroll', () => {
        if(this.pageYOffset >= sticky){
            nav.addClass('sticky');
        }
        else{
            nav.removeClass('sticky');
        }
    });
}(jQuery));