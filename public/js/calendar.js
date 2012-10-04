(function (app, Backbone, _) {
    "use strict";

    var View = Backbone.View.extend({
        template:app.utils.template("script[id='calendar']"),
        events:{
        },
        render:function () {
            var self = this,
                html = self.template({});

            self.$el.html(html).addClass("calendar");

            return this;
        }
    });

    app.starter.$(function (next) {
        app.container.route("calendar", "calendar", function (cb) {
            var view = new View({});

            return cb(undefined, view);
        });
        return next();
    });
})(window["jolira-app"], Backbone, _);
