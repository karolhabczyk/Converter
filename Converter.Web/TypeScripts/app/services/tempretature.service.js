var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var TemperatureService = (function () {
            function TemperatureService($http, settings) {
                this.$http = $http;
                this.settings = settings;
            }
            TemperatureService.prototype.fahrenheitToCelsius = function (fahrenheit) {
                return this.$http.get(this.settings.webApiUrl + 'fahrenheittocelsius/' + fahrenheit)
                    .then(function (response) {
                    return response.data;
                });
            };
            TemperatureService.prototype.celsiusToFahrenheit = function (celsius) {
                return this.$http.get(this.settings.webApiUrl + 'celsiustofahrenheit/' + celsius)
                    .then(function (response) {
                    return response.data;
                });
            };
            TemperatureService.$inject = ['$http', 'app.settings.temperature.TemperatureSettings'];
            return TemperatureService;
        })();
        factory.$inject = ['$http', 'app.settings.temperature.TemperatureSettings'];
        function factory($http, settings) {
            return new TemperatureService($http, settings);
        }
        angular
            .module('app')
            .factory('app.services.TemperatureService', factory);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=tempretature.service.js.map