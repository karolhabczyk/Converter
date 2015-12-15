(function () {

	angular.module('app', ['ngRoute'])
		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'Views/main.html',
					controller: '',
				})
				.when('/temperature', {
					templateUrl: 'Views/Temperature/main.html',
					controller: 'app.temperature.TemperatureController as vm',
				})
				.when('/temperature/fahrenheit-to-celsius', {
					templateUrl: 'Views/Temperature/fahrenheit-to-celsius.html',
					controller: 'app.temperature.TemperatureController as vm',
				})
				.when('/temperature/celsius-to-fahrenheit', {
					templateUrl: 'Views/Temperature/celsius-to-fahrenheit.html',
					controller: 'app.temperature.TemperatureController as vm',
				})
				.otherwise({
					redirectTo: '/'
				});
		}]);

})();