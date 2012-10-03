(function (app, Backbone, _) {
    "use strict";

    var View = Backbone.View.extend({
        tagName:"div",
        template:app.utils.template("script[id='gpmenu']"),
        events:{
        },
        render:function () {
            this.$el.html(this.template({})).addClass("navbar navbar-inverse navbar-fixed-top");
            return this;
        }
    });

    app.starter.$(function (next) {
        var view = new View({});

        view.render();
        $("header").append(view.$el);

        return next();
    });
})(window["jolira-app"], Backbone, _);