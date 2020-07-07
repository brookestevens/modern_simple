(function($){
    let nav = $('.region-primary-menu');
    let sticky = nav.offset().top;
    
    window.addEventListener('scroll', () => {
        console.log(nav);
        console.log(sticky, this.pageYOffset);
        if(this.pageYOffset >= sticky){
            nav.addClass('sticky');
        }
        else{
            nav.removeClass('sticky');
        }
    });
}(jQuery));