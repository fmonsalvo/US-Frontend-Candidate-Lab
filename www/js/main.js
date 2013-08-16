$(function() {

  function onClick(e) {
    var button = $(e.currentTarget);
    var accepted = button.hasClass('js-accept');
    var message = accepted ?
      'You have accepted this invitation' :
      'You have rejected this invitation';

    $('.rspv-message').hide();

    $('.js-accept')
      .attr('disabled', accepted)
      .toggleClass('selected', accepted)
      .toggleClass('loading', accepted);

    $('.js-reject')
      .attr('disabled', !accepted)
      .toggleClass('selected', !accepted)
      .toggleClass('loading', !accepted);

    setTimeout(function() {
      $('.rspv-message')
      .text(message)
      .removeClass('hidden')
      .show();

      $('.invitation-button').removeClass('loading');
    }, 2000);
  }

  $('.js-accept').click(onClick);
  $('.js-reject').click(onClick);

});
