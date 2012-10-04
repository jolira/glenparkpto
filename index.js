/*jslint node: true, vars: true, indent: 4 */
(function (module) {
    "use strict";

    var path = require("path"),
        Batch = require("batch"),
        baseline = require("site-manager-baseline"),
        templates = path.join(__dirname, "templates"),
        pubdir = path.join(__dirname, "public");

    function addDefaults(defaults, isDebugging, cb) {
        defaults.title = "Glen Park School";
        defaults.hostname = "www.glenparkpto.org";
        defaults.stylesheets = ["less/glenpark.less"];
        [
            "js/bootstrap-carousel.js",
            "js/glenpark.js",
            "js/gpmenu.js",
            "js/home.js" // home has the default route and must be loaded right after login
        ].forEach(function (dir) {
                defaults.trailingScripts.push(dir);
            });
        [
            path.join(templates, "home.html"),
            path.join(templates, "gpmenu.html")
        ].forEach(function (dir) {
                defaults.templateFiles.push(dir);
            });
        [
            {
                "name":"description",
                "content":"Glen Park School"
            }
        ].forEach(function (meta) {
                defaults.metas.push(meta);
            });
        [
        ].forEach(function (file) {
                defaults.manifest.push(file);
            });
        [
            "http://connect.facebook.net/en_US/all.js#xfbml=1",
            "img/festival1.jpg",
            "img/festival2.jpg",
            "img/festival3.jpg"
        ].forEach(function(file) {
            defaults.manifest.push(file);
        });
        defaults["public"].unshift(pubdir);
        defaults.htmlFiles.push(path.join(templates, "facebook.html"));
        defaults.googleAnalyticsWebPropertyID = "UA-3602945-1";

        return cb(undefined, defaults);
    }

    module.exports = function (defaults, cb,  lopts, gopts, app) {
        baseline(defaults, app, lopts, gopts, function(err, defaults, dispatcher) {
            if (err) {
                return cb(err);
            }

            var b = new Batch();

            b.push(function(cb) {
                return addDefaults(defaults, app.logger.isDebugging, function(err) {
                    return cb(err);
                });
            });

            return b.end(function(err) {
                return cb(err, defaults);
            });
        });
    };
})(module);