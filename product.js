var app_1 = angular.module('store-products',[]);
app_1.directive('productDetail',function(){
  return {
  	restrict: 'E',
  	template: '{{product.name}}&nbsp<em>{{product.price|currency}}</em>'
 };
});
app_1.directive('productPanels',function(){
  return {
  	restrict: 'E',
  	templateUrl:'product-panels.html',
  	controller:function(){
  	this.tab =1;
   this.selectTab = function(setTab){
   	this.tab =setTab;
   };
   this.isSelected = function(checkTab){
   return this.tab===checkTab;
   };
   },
   controllerAs:'panel'
 };
});