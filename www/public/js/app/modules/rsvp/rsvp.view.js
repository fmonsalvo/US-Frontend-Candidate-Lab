define(["backbone"],function(e){var t=e.View.extend({el:".invitation",events:{"click button":"onRsvpButtonClick"},onRsvpButtonClick:function(e){e.preventDefault();var t,n,r,i;this.model.set("response",$(e.currentTarget).attr("value")),t=this.model.hasAccepted(),this.$el.find("button[value=true]").attr("disabled",t).toggleClass("selected",t).toggleClass("loading",t),this.$el.find("button[value=false]").attr("disabled",!t).toggleClass("selected",!t).toggleClass("loading",!t),n=this.model.save(),r=this.$el.find(".rspv-message"),i=this.$el.find("button"),n.done(function(e){r.text(e.response).removeClass("removed").show()}).error(function(){r.text("There is an error with our servers, plase try again in 10 minutes.").removeClass("removed").show()}).always(function(){i.removeClass("loading")})}});return t});