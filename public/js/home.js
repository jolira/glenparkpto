(function (app, Backbone, _) {
    "use strict";

    var View = Backbone.View.extend({
        template:app.utils.template("script[id='home']"),
        initialize:function () {
            this.views = [];
        },
        close:function () {
            _.each(this.views, function (view) {
                view.close();
            });
        },
        events:{
        },
        render:function () {
            this.$el.html(this.template({})).addClass("home");
            return this;
        }
    });

    app.starter.$(function (next) {
        app.container.route("*default", "default", function (route, cb) {
            var view = new View({});

            return cb(undefined, view);
        });
        return next();
    });
})(window["jolira-app"], Backbone, _);
