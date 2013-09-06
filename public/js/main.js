$(function () {
  'use strict';
  $('form').on('click', 'button', onClick);

  function onClick(e) {
    e.preventDefault();
    var accepted = $(this).attr('value') === 'true',
      message = accepted ?
          'Thanks!' :
          'Maybe next time!';

    $('.rspv-message').addClass('removed');

    $('button[value=true]')
      .attr('disabled', accepted)
      .toggleClass('selected', accepted)
      .toggleClass('loading', accepted);

    $('button[value=false]')
      .attr('disabled', !accepted)
      .toggleClass('selected', !accepted)
      .toggleClass('loading', !accepted);

    setTimeout(function () {
      $('.rspv-message')
        .text(message)
        .removeClass('removed')
        .show();

      $('button').removeClass('loading');
    }, 2000);
  }

});
