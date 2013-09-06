define(
  [
    'backbone'
  ],
  function(Backbone) {

    var RsvpView = Backbone.View.extend({

      el: '.invitation',

      events: {
        'click button': 'onRsvpButtonClick'
      },

      onRsvpButtonClick: function(e) {
        e.preventDefault();
        var accepted,
          promiseOnSave,
          $message,
          $buttons;

        this.model.set('response', $(e.currentTarget).attr('value'));
        accepted = this.model.hasAccepted();

        //show spinner & disable button
        this.$el.find('button[value=true]')
          .attr('disabled', accepted)
          .toggleClass('selected', accepted)
          .toggleClass('loading', accepted);

        this.$el.find('button[value=false]')
          .attr('disabled', !accepted)
          .toggleClass('selected', !accepted)
          .toggleClass('loading', !accepted);

        promiseOnSave = this.model.save();
        $message = this.$el.find('.rspv-message');
        $buttons = this.$el.find('button');

        promiseOnSave
          .done(function(res) {
            $message
              .text(res.response)
              .removeClass('removed')
              .show();
          })
          .error(function() {
            $message
              .text('There is an error with our servers, plase try again in 10 minutes.')
              .removeClass('removed')
              .show();
          })
          .always(function() {
            $buttons.removeClass('loading');
          });
      }

    });

    return RsvpView;
  }
);