$(function () {
  'use strict';
  var acceptBtn = $('.js-accept'),
    rejectBtn = $('.js-reject');

  function onClick(e) {
    e.preventDefault();
    var button = $(e.currentTarget),
      accepted = button.hasClass('js-accept'),
      message = accepted ?
          'You have accepted this invitation' :
          'You have rejected this invitation';

    $('.rspv-message').hide();

    acceptBtn
      .attr('disabled', accepted)
      .toggleClass('selected', accepted)
      .toggleClass('loading', accepted);

    rejectBtn
      .attr('disabled', !accepted)
      .toggleClass('selected', !accepted)
      .toggleClass('loading', !accepted);

    setTimeout(function () {
      $('.rspv-message')
        .text(message)
        .removeClass('hidden')
        .show();

      $('.invitation-button').removeClass('loading');
    }, 2000);
  }

  acceptBtn.click(onClick);
  rejectBtn.click(onClick);

});
