(function() {
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);


    RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'src/templates/home.template.html'
        })

        .state('categories', {
            url: '/categories/{category.name}',
            templateUrl: 'src/templates/maincategories.template.html',
            controller: 'CategoriesListController as clist',
            resolve: {
                categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
            }
        })

        .state('items', {
            url: '/items/{categoryShortName}',
            templateUrl: 'src/templates/mainitems.template.html',
            controller: 'ItemsListController as ilist',
            resolve: {
                items: ['$stateParams', 'MenuDataService',  function ($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                    }]
            }

        });

    }

}) ();
