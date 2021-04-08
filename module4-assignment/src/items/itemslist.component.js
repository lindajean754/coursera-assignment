(function () {
    'use strict';

    angular.module('MenuApp')

    .component("menuItems",
        {
            templateUrl: 'src/templates/itemslist.template.html',
            bindings: {
              menuitems: '<'
            }
        })
})();
