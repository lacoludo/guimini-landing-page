$('#contactForm')
  .validator()
  .on('submit', event => {
    if (event.isDefaultPrevented()) {
      formError()
      submitMSG(false, 'Did you fill in the form properly?')
    } else {
      event.preventDefault()
      submitForm()
    }
  })

const submitForm = () => {
  const name = $('#name').val()
  const email = $('#email').val()
  const msg_subject = $('#msg_subject').val()
  const message = $('#message').val()

  $.ajax({
    type: 'POST',
    url: 'assets/php/form-process.php',
    data: `name=${name}&email=${email}&msg_subject=${msg_subject}&message=${message}`,
    success: text => {
      if (text === 'success') {
        formSuccess()
      } else {
        formError()
        submitMSG(false, text)
      }
    }
  })
}

const formSuccess = () => {
  $('#contactForm')[0].reset()
  submitMSG(true, 'Message Submitted!')
}

const formError = () =>
  $('#contactForm')
    .removeClass()
    .addClass('shake animated')
    .one(
      'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      () => $('#contactForm').removeClass()
    )

const submitMSG = (valid, msg) => {
  let msgClasses
  valid
    ? (msgClasses = 'h4 text-left tada animated text-success')
    : (msgClasses = 'h4 text-left text-danger')
  $('#msgSubmit')
    .removeClass()
    .addClass(msgClasses)
    .text(msg)
}
