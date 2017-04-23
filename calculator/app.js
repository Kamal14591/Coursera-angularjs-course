(
  function(){

    'use strict';

    angular.module('nameCalculator',[])
    .controller('nameCalculatorController', function($scope)
  {

    $scope.name ="";
    $scope.totalValue = 0;

    $scope.displayTotalValue = function()
    {
      var totalValue = calculateNumericForString($scope.name);
      $scope.totalValue = totalValue;
    }

    function calculateNumericForString(string)
    {
        var totalStringValue = 0;

        for(int i = 0; i < string.length; i++)
        {
          totalStringValue += string.charCodeAt(i);
        }

        return totalStringValue;

    }

  });

  }
)();
