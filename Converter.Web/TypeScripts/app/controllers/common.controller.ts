var currentTime = new Date();

module app.common {
    'use strict';

    interface ICommonScope {

        getCurrentYear(): string;
    }

    class CommonController implements ICommonScope {

        constructor() { }

        getCurrentYear(): string{
            return new Date().getFullYear().toString();
        }
    }

    function factory() {
        return new CommonController();
    }

    angular
        .module('app')
        .controller('app.common.CommonController', CommonController);
}