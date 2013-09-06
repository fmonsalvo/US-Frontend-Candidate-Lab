define(
  [
    'backbone'
  ],
  function(Backbone) {
    'use strict';

    var RsvpModel = Backbone.Model.extend({
      url: 'rsvp',

      hasAccepted: function() {
        return this.get('response') === 'true';
      }

    });

    return RsvpModel;
  }
);
