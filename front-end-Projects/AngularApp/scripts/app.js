(function () {
	var newApp = angular.module('newApp', ['ngRoute']);
	
	newApp.config(function ($routeProvider) {
		$routeProvider
		
		.when('/', {
			templateUrl: 'pages/index.html',
			controller: 'mainControl'	
		})
		
		.when('/about', {
			templateUrl: 'pages/about.html',
			controller: 'aboutControl'	
		})
	});
	
	newApp.controller('TabController', function() {
		this.tab = 1;
	
	 	this.setTab = function(newValue){
			this.tab = newValue;
	 	};
	
	 	this.isSet = function(tabName){
			return this.tab === tabName;
	 	};
	});	
	
	newApp.controller('GalleryController', function() {
	 	this.current = 0;
	 	this.setCurrent = function(newGallery){
			this.current = newGallery || 0;
	 	};
	});
	
	newApp.controller('ReviewController', function () {
		this.review = {};	
		
		this.addReview = function (prd) { 
			prd.reviews.push(this.review);
			this.review = {};// create a brand new review object. This clear out form and hide live preview
		};
	});	
	
	newApp.controller('StoreController', ['$http', function ($http) {		
		var store = this;	
		
		store.products = [];	
		
		$http.get('server/products.json').success(function (data) {
			store.products = data;		
		});
	}]);	     
})();
