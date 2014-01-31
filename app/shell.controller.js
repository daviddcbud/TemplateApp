angular.module(myAppName).controller('ShellCtrl', ['$scope', '$log', 'sharedDataService',
    function ($scope, $log,sharedDataService) {

    	$scope.shellmodel = {};
    	$scope.shellmodel.alert = '';
        
      $scope.$on('alertUpdated',function(event,x)
{
        $scope.shellmodel.alert=x;
        $scope.$apply();
       
});

   $scope.$on('onlineStatusChanged',function(event,x)
{
       $scope.shellmodel.alert='';   
        if(!x)
       { 
           $scope.shellmodel.alert='You are offline';
         
       }
  $scope.$apply();
        
});
    	$log.debug('Shell controller');
    	


    }

]);
