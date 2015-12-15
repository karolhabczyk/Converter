/// <reference path="../../../Scripts/typings/mathjs/mathjs.d.ts" />
var app;
(function (app) {
    var temperature;
    (function (temperature) {
        'use strict';
        var TempratureController = (function () {
            function TempratureController($http, temperatureService) {
                this.$http = $http;
                this.temperatureService = temperatureService;
            }
            TempratureController.prototype.fahrenheitToCelsius = function () {
                var _this = this;
                return this.temperatureService.fahrenheitToCelsius(this.fahrenheit)
                    .then(function (data) {
                    _this.celsius = math.round(data, 2);
                });
            };
            TempratureController.prototype.celsiusToFahrenheit = function () {
                var _this = this;
                return this.temperatureService.celsiusToFahrenheit(this.celsius)
                    .then(function (data) {
                    _this.fahrenheit = math.round(data, 2);
                });
            };
            TempratureController.$inject = ['$http', 'app.services.TemperatureService'];
            return TempratureController;
        })();
        factory.$inject = ['$http', 'app.services.TemperatureService'];
        function factory($http, temperatureService) {
            return new TempratureController($http, temperatureService);
        }
        angular
            .module('app')
            .controller('app.temperature.TemperatureController', factory);
    })(temperature = app.temperature || (app.temperature = {}));
})(app || (app = {}));
//# sourceMappingURL=temperature.controller.js.map