$(document).on('ready', () => {
  // Mean Menu
  $('.mean-menu').meanmenu({
    meanScreenWidth: '991'
  })

  // Add active class for Home
  if ($('#home').length) $('#nav-home').addClass('active')

  // Add active class for Join Us
  if ($('#join-us').length) $('#nav-join-us').addClass('active')

  // Header Sticky
  $(window).on('scroll', () =>
    $(window).scrollTop() > 120
      ? $('.artflex-nav').addClass('is-sticky')
      : $('.artflex-nav').removeClass('is-sticky')
  )

  // Odometer FunFact
  $('.odometer').appear(() => {
    $('#odometer-1').html($('#odometer-1').attr('data-count'))
    $('#odometer-2').html($('#odometer-2').attr('data-count'))
    $('#odometer-3').html($('#odometer-3').attr('data-count'))
  })

  // Partner Slides
  $('.partner-slides').owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 1000,
    dots: false,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 3
      },
      1200: {
        items: 5
      }
    }
  })

  // Go to Offer
  $('.go-offer').on('click', () =>
    $('html, body').animate(
      {
        scrollTop: $('#offer').offset().top
      },
      500
    )
  )

  // Go to Expertises
  $('.go-expertises').on('click', () =>
    $('html, body').animate(
      {
        scrollTop: $('#expertises').offset().top
      },
      500
    )
  )

  // Go to Clients
  $('.go-clients').on('click', () =>
    $('html, body').animate(
      {
        scrollTop: $('#clients').offset().top
      },
      500
    )
  )

  // Go to Blog
  $('.go-blog').on('click', () =>
    $('html, body').animate(
      {
        scrollTop: $('#blog').offset().top
      },
      500
    )
  )

  // Go to Contact
  $('.go-contact').on('click', () =>
    $('html, body').animate(
      {
        scrollTop: $('#contact').offset().top
      },
      500
    )
  )

  // Go to Top
  $(() => {
    $(window).on('scroll', () => {
      const scrolled = $(window).scrollTop()
      if (scrolled > 300) $('.go-top').fadeIn('slow')
      if (scrolled < 300) $('.go-top').fadeOut('slow')
    })
    $('.go-top').on('click', () =>
      $('html, body').animate(
        {
          scrollTop: '0'
        },
        500
      )
    )
  })

  // See more button
  $('#collapseTeam').on('hidden.bs.collapse', () =>
    $('#collapseTeamButton').text('Voir Plus')
  )

  // See less button
  $('#collapseTeam').on('shown.bs.collapse', () =>
    $('#collapseTeamButton').text('Voir Moins')
  )
})

$(window).on('load', () => {
  // WOW JS
  if ($('.wow').length) {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 20,
      mobile: true,
      live: true
    })
    wow.init()
  }

  // Preloader Area
  $('.preloader').fadeOut()
})
