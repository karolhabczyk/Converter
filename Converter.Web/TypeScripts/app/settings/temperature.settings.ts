module app.settings.temperature {
	'use strict';

	export interface ITemperatureSettings {
		webApiUrl: string;
	}

	class TemperatureSettingsDev implements ITemperatureSettings {

        webApiUrl: string = 'http://localhost:62137/api/temperature/';

		constructor() { }
	}

	class TemperatureSettingsProd implements ITemperatureSettings {

		webApiUrl: string = 'http://converterapi.azurewebsites.net/api/temperature/';

		constructor() { }
	}

	function factory() {
		return new TemperatureSettingsProd();
	}

	angular
		.module('app')
		.factory('app.settings.temperature.TemperatureSettings', factory);
}

