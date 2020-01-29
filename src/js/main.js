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
  $(window).on('scroll', () => {
    $(window).scrollTop() > 120
      ? $('.artflex-nav').addClass('is-sticky')
      : $('.artflex-nav').removeClass('is-sticky')
  })

  // Partner Slides
  $('.partner-slides').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
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

  // Go to Services
  $('.go-services').on('click', () => {
    $('html, body').animate(
      {
        scrollTop: $('#services').offset().top
      },
      500
    )
  })

  // Go to Expertises
  $('.go-expertises').on('click', () => {
    $('html, body').animate(
      {
        scrollTop: $('#expertises').offset().top
      },
      500
    )
  })

  // Go to Clients
  $('.go-clients').on('click', () => {
    $('html, body').animate(
      {
        scrollTop: $('#clients').offset().top
      },
      500
    )
  })

  // Go to Team
  $('.go-team').on('click', () => {
    $('html, body').animate(
      {
        scrollTop: $('#team').offset().top
      },
      500
    )
  })

  // Go to Blog
  $('.go-blog').on('click', () => {
    $('html, body').animate(
      {
        scrollTop: $('#blog').offset().top
      },
      500
    )
  })

  // Go to Contact
  $('.go-contact').on('click', () => {
    $('html, body').animate(
      {
        scrollTop: $('#contact').offset().top
      },
      500
    )
  })

  // Go to Top
  $(() => {
    //Scroll event
    $(window).on('scroll', () => {
      const scrolled = $(window).scrollTop()
      if (scrolled > 300) $('.go-top').fadeIn('slow')
      if (scrolled < 300) $('.go-top').fadeOut('slow')
    })
    //Click event
    $('.go-top').on('click', () => {
      $('html, body').animate(
        {
          scrollTop: '0'
        },
        500
      )
    })
  })

  // See more button
  $('#collapseTeam').on('hidden.bs.collapse', () => {
    $('#collapseTeamButton').text('Voir Plus')
  })

  // See less button
  $('#collapseTeam').on('shown.bs.collapse', () => {
    $('#collapseTeamButton').text('Voir Moins')
  })
})

$(window).on('load', () => {
  // WOW JS
  if ($('.wow').length) {
    const wow = new WOW({
      boxClass: 'wow', // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 20, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true // act on asynchronously loaded content (default is true)
    })
    wow.init()
  }

  // Preloader Area
  $('.preloader').fadeOut()
})
