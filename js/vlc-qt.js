---
layout: null
---
var cookies =
{
    // Function to call on load
    showMessageLoad: function()
    {
        if ($.cookie('cookies_enable')) {
            $('#cookie_message').css('display:', 'none');
        } else {
            cookies.showMessage();
        }
    },

    // To hide the message but show it again on page reload
    hideMessage: function()
    {
        $('#cookie_message').alert('close');
    },

    // To hide the hide the message and set the cookie so when the page is reloaded the message does not appear
    hideForever: function()
    {
        cookies.hideMessage();
        $.cookie('cookies_enable', true, { expires: 180, path: '/', domain: 'tano.si' });
    },

    // Optional function to show message manually on the demo page
    showMessage: function()
    {
        $('#cookie_message').addClass('in');
    },

    // Delete cookie
    delete: function()
    {
        $.removeCookie('cookies_enable', { path: '/', domain: 'tano.si' });
    }
};

$(document).ready(function()
{
    cookies.showMessageLoad();

    $('[data-toggle=offcanvas]').click(function() {
        $('.row-offcanvas').toggleClass('active');
    });

    function sidebarResize() {
        if ($(window).width() < 768) {
            $('.sidebar-offcanvas').addClass('anim');
        } else {
            $('.sidebar-offcanvas').removeClass('anim');
            $('.row-offcanvas').removeClass('active');
        }
    };
    sidebarResize();
    $(window).resize(sidebarResize);
});
