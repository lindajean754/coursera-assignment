
(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController (items) {
      var itemlist = this;
      itemlist.items = items.menu_items;
     

    }

}) ();
