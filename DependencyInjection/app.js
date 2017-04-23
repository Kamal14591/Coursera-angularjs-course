(
function()
{
  'use strict';
angular.module('DIapp',[])
.controller('DIController',DIController);

DIController.inject = ['$scope','$filter'];

function DIController($scope, $filter)
{
  $scope.name ="kamal";

  $scope.upper = function()
  {
    var  upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  }

}
}
)();
