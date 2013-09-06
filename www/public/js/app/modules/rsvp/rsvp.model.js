define(
  [
    'backbone'
  ],
  function(Backbone) {
    'use strict';

    var RsvpModel = Backbone.Model.extend({
      url: 'rsvp',

      isAccepted: function() {
        return this.get('response') === 'true';
      }

    });

    return RsvpModel;
  }
);
