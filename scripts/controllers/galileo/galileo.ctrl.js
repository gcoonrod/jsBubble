define('galileo.ctrl', ['app', 'config', 'nav', 'highlight', 'ui-bootstrap', 'underscore'], function (app, config){
	app.controller('GalileoMainController', ['$scope', '$location', '$routeParams', '$rootScope', '$http', function ($scope, $location, $routeParams, $rootScope, $http) {
		$scope.howdy = "Howdy!";

		$scope.slides = [];
		var slides = $scope.slides;
		$scope.interval = 5000;
		$scope.activeSlide = {};

		$scope.totalItems = 64;
		$scope.currentPage = 1;
		$scope.maxSize = 5;

		$scope.setPage = function (pageNo){
			$scope.currentPage = pageNo;
			$scope.loadSlide(pageNo);
		};

		$scope.loadSlide = function (slideNumber){
			$scope.activeSlide = $scope.slides[slideNumber - 1];
		};

		$http.get('data/slides.json').success(function (data){
			$scope.slides = data;
			$scope.maxSize = data.length;
			$scope.setPage(1);

			console.log($scope);
		});

		$scope.activeUrl = function (){
			return "./views/galileo/slides/slide_" + $scope.activeSlide.num + ".html";
		};

	}]);

	return {};
});