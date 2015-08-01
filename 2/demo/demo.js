var demo = angular.module('demo', []);

demo.controller('MainCtrl', ['$scope', mainCtrl]);

function mainCtrl($scope) {
  $scope.initialBalloon = Balloon;
  $scope.customBalloonA = balloonA;
  $scope.customBalloonB = balloonB;
}