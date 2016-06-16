(function () {
	var single = angular.module('singleApp', []);
	
	single.directive('productTab', function () {
		return {		
			restrict: 'A',
			templateURL: 'productTab.html'
		};	
	});
})();	
