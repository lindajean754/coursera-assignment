
(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsListController', ItemsListController);

  ItemsListController.$inject = ['items']
  function ItemsListController (items) {
      var itemlist = this;
      itemlist.items = items.menu_items;
  }

}) ();
