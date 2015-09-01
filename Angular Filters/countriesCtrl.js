var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope) {
	$scope.names =[{name:'Pavitra',country:'India'},
				  {name:'Meera',country:'US'},
				  {name:'Riddhi',country:'Europe'}];
});				  