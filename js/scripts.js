// go to home page
$('#home-link').click(function() {
    // fade out about
	$('.about').fadeOut('fast', function() {
        document.getElementById('about-link').classList.remove('current');

        // fade out experience
        $('.experience').fadeOut('fast', function() {
            document.getElementById('experience-link').classList.remove('current');

            // fade in home
            document.getElementById('home-link').classList.add('current');
            $('.home').fadeIn('slow');

						// un-darken background
						document.getElementById('main').classList.remove('darken');
						document.getElementById('main').classList.add('undarken');
        });
    });
});

// go to about page
$('#about-link').click(function() {
    // fade out home
	$('.home').fadeOut('fast', function() {
        document.getElementById('home-link').classList.remove('current');

        // fade out experience
        $('.experience').fadeOut('fast', function() {
            document.getElementById('experience-link').classList.remove('current');

            // fade in about
            document.getElementById('about-link').classList.add('current');
            $('.about').fadeIn('slow');

						// darken background
						document.getElementById('main').classList.remove('undarken');
						document.getElementById('main').classList.add('darken');
        });
    });
});

// go to experience page
$('#experience-link').click(function() {
    // fade out home
	$('.home').fadeOut('fast', function() {
        document.getElementById('home-link').classList.remove('current');

        // fade out about
        $('.about').fadeOut('fast', function() {
            document.getElementById('about-link').classList.remove('current');

            // fade in experience
            document.getElementById('experience-link').classList.add('current');
            $('.experience').fadeIn('slow');

						// darken background
						document.getElementById('main').classList.remove('undarken');
						document.getElementById('main').classList.add('darken');
        });
    });
});

// default to home
$('#home-link').click();

// typing effect from typed.js
$('.typedDes').typed({
    strings: ['software engineer'],
    typeSpeed: 30,
    loop: false,
    startDelay: 250,
    backDelay: 1000
});
