(function (){
    'use strict';

    angular.module('myFirstApp', [])

    .controller('MyFirstController', function ($scope){
      $scope.name = "kamal";
      $scope.sayHello = function()
      {
        return " Hello ";
      }

    });

  })();
