var cookies = {
  // Function to call on load
  showMessageLoad: function() {
    if (Cookies.get('cookies_enable')) {
      $('#cookie_message').css('display:', 'none');
    } else {
      cookies.showMessage();
    }
  },

  // To hide the message but show it again on page reload
  hideMessage: function() {
    $('#cookie_message').fadeOut(200, function() {
      $(this).remove();
    });
  },

  // To hide the hide the message and set the cookie so when the page is reloaded the message does not appear
  hideForever: function() {
    cookies.hideMessage();
    Cookies.set('cookies_enable', true, {
      expires: 180,
      path: '/',
      domain: 'tano.si'
    });
  },

  // Optional function to show message manually on the demo page
  showMessage: function() {
    $('#cookie_message').show();
  },

  // Delete cookie
  delete: function() {
    Cookies.remove('cookies_enable', {
      path: '/',
      domain: 'tano.si'
    });
  }
};