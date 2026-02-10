$(document).ready(function() {
    
    // EVENT 1: Click Event (Reveal Contact)
    $('#contact-btn').on('click', function() {
        $('#contact-info').slideToggle(500).toggleClass('contact-hide');
        $(this).text($(this).text() === 'SEND MESSAGE' ? 'DECRYPTING...' : 'SEND MESSAGE');
    });

    // EVENT 2: Scroll Event (Navbar Shadow/Transparency)
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('bg-dark shadow-lg');
        } else {
            $('.navbar').removeClass('bg-dark shadow-lg');
        }
    });

    // EVENT 3: Mouse Enter Event (Glow Effect on Title)
    $('.main-title').on('mouseenter', function() {
        $(this).find('.italic-glow').css('text-shadow', '0 0 30px #ff007f');
    }).on('mouseleave', function() {
        $(this).find('.italic-glow').css('text-shadow', '0 0 15px rgba(255, 0, 127, 0.4)');
    });

    // EVENT 4: Mouse Down Event (Scale Profile Image)
    $('.profile-circle img').on('mousedown', function() {
        $(this).css('transform', 'scale(0.9)');
    }).on('mouseup', function() {
        $(this).css('transform', 'scale(1)');
    });

    // EVENT 5: Double Click Event (Toggle Dark/Light Background Variant)
    $('.hobby-tag').on('click', function() {
        $(this).toggleClass('bg-pink text-white');
    });

});