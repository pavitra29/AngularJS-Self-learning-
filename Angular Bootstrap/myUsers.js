/**
 * Created by PSrinivasan on 8/10/2015.
 */

var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope) {

    $scope.reset = function() {
        $scope.fName='';
        $scope.lName='';
        $scope.pass1='';
        $scope.pass2='';
    }

    $scope.users = [
        {id: 1, fName: 'Pavitra', lName: "Srinivasan"},
        {id: 2, fName: 'Meera', lName: "Udani"},
        {id: 3, fName: 'Ramya', lName: "Kalyan"},
        {id: 4, fName: 'Muthu', lName: "Lakshmi"},
        {id: 5, fName: 'Neharika', lName: "Mandhan"}
    ];

    $scope.edit=true;
    $scope.error=false;
    $scope.incomplete=false;
    $scope.reset();

    $scope.save=function(newfName,newlName) {
        var count=0;
        for (var i=0;i<$scope.users.length;i++) {
            count++;
        }
        $scope.users.push({id:count+1,fName:newfName,lName:newlName})
        $scope.reset();

    }


    $scope.editUser=function(id) {
        if(id == 'new') {
            $scope.edit=true;
            $scope.incomplete=true;
            $scope.reset();
        }
        else {
            $scope.edit=false;
            $scope.fName=$scope.users[id-1].fName;
            $scope.lName=$scope.users[id-1].lName;
            $scope.pass1='';
            $scope.pass2='';
        }
    };

    $scope.$watch('pass1',function() {$scope.test();});
    $scope.$watch('pass2',function() {$scope.test();});
    $scope.$watch('fName',function() {$scope.test();});
    $scope.$watch('lName',function() {$scope.test();});

    $scope.test = function() {
        if ($scope.pass1 != $scope.pass2) {
            $scope.error = true;
        }
        else {
            $scope.error = false;
        }

        $scope.incomplete = false;

        if ($scope.edit && (!$scope.fName.length ||
                            !$scope.lName.length ||
                            !$scope.pass1.length ||
                            !$scope.pass2.length)) {
            $scope.incomplete = true;
        }
    };
});