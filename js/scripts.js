// go to home page
$('#home-link').click(function() {
    // fade out about
	$('.about').fadeOut('fast', function() {
        document.getElementById('about-link').classList.remove('current');

        // fade out portfolio
        $('.portfolio').fadeOut('fast', function() {
            document.getElementById('portfolio-link').classList.remove('current');

            // fade out contact
            $('.contact').fadeOut('fast', function() {
                document.getElementById('contact-link').classList.remove('current');

                // fade in home
                document.getElementById('home-link').classList.add('current');
                $('.home').fadeIn('slow');

								// un-darken background
								document.getElementById('main').classList.remove('darken');
								document.getElementById('main').classList.add('undarken');
            });
        });
    });
});

// go to about page
$('#about-link').click(function() {
    // fade out home
	$('.home').fadeOut('fast', function() {
        document.getElementById('home-link').classList.remove('current');

        // fade out portfolio
        $('.portfolio').fadeOut('fast', function() {
            document.getElementById('portfolio-link').classList.remove('current');

            // fade out contact
            $('.contact').fadeOut('fast', function() {
                document.getElementById('contact-link').classList.remove('current');

                // fade in about
                document.getElementById('about-link').classList.add('current');
                $('.about').fadeIn('slow');

								// darken background
								document.getElementById('main').classList.remove('undarken');
								document.getElementById('main').classList.add('darken');
            });
        });
    });
});

// go to portfolio page
$('#portfolio-link').click(function() {
    // fade out home
	$('.home').fadeOut('fast', function() {
        document.getElementById('home-link').classList.remove('current');

        // fade out about
        $('.about').fadeOut('fast', function() {
            document.getElementById('about-link').classList.remove('current');

            // fade out contact
            $('.contact').fadeOut('fast', function() {
                document.getElementById('contact-link').classList.remove('current');

                // fade in portfolio
                document.getElementById('portfolio-link').classList.add('current');
                $('.portfolio').fadeIn('slow');

								// darken background
								document.getElementById('main').classList.remove('undarken');
								document.getElementById('main').classList.add('darken');
            });
        });
    });
});

// go to contact page
$('#contact-link').click(function() {
    // fade out home
	$('.home').fadeOut('fast', function() {
        document.getElementById('home-link').classList.remove('current');

        // fade out about
        $('.about').fadeOut('fast', function() {
            document.getElementById('about-link').classList.remove('current');

            // fade out portfolio
            $('.portfolio').fadeOut('fast', function() {
                document.getElementById('portfolio-link').classList.remove('current');

                // fade in contact
                document.getElementById('contact-link').classList.add('current');
                $('.contact').fadeIn('slow');

								// darken background
								document.getElementById('main').classList.remove('undarken');
                if (!document.getElementById('main').classList.contains('darken')) {
									document.getElementById('main').classList.add('darken');
								}
            });
        });
    });
});

// default to home
$('#home-link').click();

// typing effect from typed.js
$('.typedDes').typed({
    strings: ['full stack dev', 'algorithms', 'product management', 'data science'],
    typeSpeed: 0,
    loop: true,
    startDelay: 250,
    backDelay: 1000
});
