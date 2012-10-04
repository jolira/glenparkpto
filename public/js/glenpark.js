(function (app, Backbone, _) {
    "use strict";

    app.middle.disable = true;

    app.cache.updateReady = function () {
        window.location.reload();
    };
})(window["jolira-app"], Backbone, _);