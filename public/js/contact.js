(function (app, Backbone, _) {
    "use strict";

    var View = Backbone.View.extend({
        template:app.utils.template("script[id='contact']"),
        events:{
        },
        render:function () {
            this.$el.html(this.template({})).addClass("contact");

            return this;
        }
    });

    app.starter.$(function (next) {
        app.container.route("contact", "contact", function (cb) {
            var view = new View({});

            return cb(undefined, view);
        });
        return next();
    });
})(window["jolira-app"], Backbone, _);
