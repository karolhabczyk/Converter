var app;
(function (app) {
    var settings;
    (function (settings) {
        var temperature;
        (function (temperature) {
            'use strict';
            var TemperatureSettingsDev = (function () {
                function TemperatureSettingsDev() {
                    this.webApiUrl = 'http://localhost:62137/api/temperature/';
                }
                return TemperatureSettingsDev;
            })();
            var TemperatureSettingsProd = (function () {
                function TemperatureSettingsProd() {
                    this.webApiUrl = 'http://converterapi.azurewebsites.net/api/temperature/';
                }
                return TemperatureSettingsProd;
            })();
            function factory() {
                return new TemperatureSettingsProd();
            }
            angular
                .module('app')
                .factory('app.settings.temperature.TemperatureSettings', factory);
        })(temperature = settings.temperature || (settings.temperature = {}));
    })(settings = app.settings || (app.settings = {}));
})(app || (app = {}));
//# sourceMappingURL=temperature.settings.js.map