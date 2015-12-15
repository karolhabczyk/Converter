/// <reference path="../../../Scripts/typings/mathjs/mathjs.d.ts" />

module app.temperature {
	'use strict';

	interface ITemperatureScope {

		fahrenheit: number;
		celsius: number;

		fahrenheitToCelsius(): ng.IPromise<number>;
		celsiusToFahrenheit(): ng.IPromise<number>;
	}

	class TempratureController implements ITemperatureScope {
		
		static $inject = ['$http', 'app.services.TemperatureService'];

		fahrenheit: number;
		celsius: number;

		constructor(private $http: ng.IHttpService, private temperatureService: services.ITemperatureService) {

		}

		fahrenheitToCelsius(): ng.IPromise<number> {
			return this.temperatureService.fahrenheitToCelsius(this.fahrenheit)
				.then((data: ng.IHttpPromiseCallbackArg<number>): any => {
					this.celsius = <number>math.round(<number>data, 2);
				});
		}

		celsiusToFahrenheit(): ng.IPromise<number> {
			return this.temperatureService.celsiusToFahrenheit(this.celsius)
				.then((data: ng.IHttpPromiseCallbackArg<number>): any => {
					this.fahrenheit = <number>math.round(<number>data, 2);
				});
		}
	}

	factory.$inject = ['$http', 'app.services.TemperatureService'];
	function factory($http: ng.IHttpService, temperatureService: services.ITemperatureService) {
		return new TempratureController($http, temperatureService);
	}

	angular
		.module('app')
		.controller('app.temperature.TemperatureController', factory);
}