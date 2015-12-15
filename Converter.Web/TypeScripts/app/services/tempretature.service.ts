module app.services {
	'use strict';

	export interface ITemperatureService {
		fahrenheitToCelsius(fahrenheit: number): ng.IPromise<number>;
		celsiusToFahrenheit(celsius: number): ng.IPromise<number>;

	}

	class TemperatureService implements ITemperatureService {

		static $inject = ['$http', 'app.settings.temperature.TemperatureSettings'];

		constructor(private $http: ng.IHttpService, private settings: settings.temperature.ITemperatureSettings) {

		}

		fahrenheitToCelsius(fahrenheit: number): ng.IPromise<number> {
			return this.$http.get(this.settings.webApiUrl + 'fahrenheittocelsius/' + fahrenheit)
				.then((response: ng.IHttpPromiseCallbackArg<number>): number => {
					return response.data;
				});
		}

		celsiusToFahrenheit(celsius: number): ng.IPromise<number> {
			return this.$http.get(this.settings.webApiUrl + 'celsiustofahrenheit/' + celsius)
				.then((response: ng.IHttpPromiseCallbackArg<number>): number => {
					return response.data;
				});
		}


	}

	factory.$inject = ['$http', 'app.settings.temperature.TemperatureSettings'];
	function factory($http: ng.IHttpService, settings: settings.temperature.ITemperatureSettings) {
		return new TemperatureService($http, settings);
	}

	angular
		.module('app')
		.factory('app.services.TemperatureService', factory);
}