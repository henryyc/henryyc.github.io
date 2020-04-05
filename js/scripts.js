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

// modal max height - not tested just copied xd
function setModalMaxHeight(element) {
  this.$element     = $(element);
  this.$content     = this.$element.find('.modal-content');
  var borderWidth   = this.$content.outerHeight() - this.$content.innerHeight();
  var dialogMargin  = $(window).width() < 768 ? 20 : 60;
  var contentHeight = $(window).height() - (dialogMargin + borderWidth);
  var headerHeight  = this.$element.find('.modal-header').outerHeight() || 0;
  var footerHeight  = this.$element.find('.modal-footer').outerHeight() || 0;
  var maxHeight     = contentHeight - (headerHeight + footerHeight);

  this.$content.css({
      'overflow': 'hidden'
  });

  this.$element
    .find('.modal-body').css({
      'max-height': maxHeight,
      'overflow-y': 'auto'
  });
}

$('.modal').on('show.bs.modal', function() {
  $(this).show();
  setModalMaxHeight(this);
});

$(window).resize(function() {
  if ($('.modal.in').length != 0) {
    setModalMaxHeight($('.modal.in'));
  }
});
