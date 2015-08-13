/**
 * Created by sarahdoire on 8/13/15.
 */
var myApp = angular.module('myApp', []);



//myApp.run(function($rootScope) {
//    $rootScope.globalUpdateMessage = function($scope) {
//        $scope.heading = "Here is your message: ";
//        $scope.updateMessage = function(){
//            $scope.message = "Hello " + $scope.name + "!";
//        };
//    };
//});
//
//myApp.controller('WelcomeController', ['$scope', function($scope){
//
//}]);
//myApp.factory('myService', function() {
//    return {
//        updateMessage: function($scope) {
//            $scope.heading = "Here is your message: ";
//            $scope.updateMessage = function(){
//                $scope.message = "Hello " + $scope.name + "!";
//            };
//        }
//    };
//});
//
//myApp.controller('WelcomeController', ['$scope', 'myService', function($scope, myService) {
//    $scope.callUpdateMessage = function() {
//        myService.updateMessage();
//    }
//}]);
myApp.controller("WelcomeController", ['$scope', function($scope){
    $scope.heading = "Here is your message: ";
    $scope.updateMessage = function(){
        $scope.message = "Hello " + $scope.name + "!";
    };
}]);