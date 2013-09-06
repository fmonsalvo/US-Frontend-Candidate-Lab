define(
  [
    'backbone',
    'app/modules/rsvp/rsvp.view',
    'app/modules/rsvp/rsvp.model'
  ],
  function(Backbone, RsvpView, RsvpModel) {
    var Router = Backbone.Router.extend({

      routes: {
        '*path': 'handleDefaultRoute'
      },

      initialize: function() {
        Backbone.history.start();
      },

      handleDefaultRoute: function(path) {
        new RsvpView({
          model: new RsvpModel()
        });
      }

    });
    return Router;
  }
);