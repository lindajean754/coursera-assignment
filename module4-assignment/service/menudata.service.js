(function () {
    'use strict';

    angular.module('data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        var service = this;

        service.getAllCategories = function() {
          var response = $http({
            method: "GET",
            url: (ApiBasePath + "/categories.json")
              .then(function(response) {
              })
          });
          return response.data;
        };

        service.getItemsForCategory = function (categoryShortName) {
          var response = $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
              .then(function(response) {
              })
            params: {
              category: categoryShortName
            }
          });
          return response.data;
        };
  }
})();
