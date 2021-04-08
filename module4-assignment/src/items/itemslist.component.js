(function () {
    'use strict';

    angular.module('MenuApp')

    .component("menuItems",
        {
            templateUrl: 'src/items/itemslist.html',
            bindings: {
              menuitems: '<'
            }
        })
})();
