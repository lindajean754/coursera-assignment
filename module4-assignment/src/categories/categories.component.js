(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categoriesList',
        {
            templateUrl: 'src/categories/categorieslist.html',
            bindings: {
                categories: '<',
                categoriessn: '<'
            }
        })
})();
