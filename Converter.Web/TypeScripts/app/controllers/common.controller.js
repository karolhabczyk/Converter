var currentTime = new Date();
var app;
(function (app) {
    var common;
    (function (common) {
        'use strict';
        var CommonController = (function () {
            function CommonController() {
            }
            CommonController.prototype.getCurrentYear = function () {
                return new Date().getFullYear().toString();
            };
            return CommonController;
        })();
        function factory() {
            return new CommonController();
        }
        angular
            .module('app')
            .controller('app.common.CommonController', CommonController);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=common.controller.js.map