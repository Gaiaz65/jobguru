$(document).ready(function () {
    $('.save-pdf').click(function() {
        $('.modal-overlay').fadeIn(150)
        return false
    })

    $('.modal-close').click(function() {
        $('.modal-overlay').fadeOut(150)
        return false
    })

    $('.preview-cv').click(function() {
        $('.preview-overlay').fadeIn(150)
        return false
    })
    
    $('.preview-modal__close').click(function() {
        $('.preview-overlay').fadeOut(150)
        return false
    })
})

$(window).on('load scroll resize', function() {
    let wt = $(window).scrollTop();
	let wh = $(window).height();
	let et = $('.footer').offset().top;
	let eh = $('.footer').outerHeight();
	let dh = $(document).height();   

	if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
        $('.mobile-cv-nav').removeClass('fixed')
	} else {
		$('.mobile-cv-nav').addClass('fixed')
    }
})