angular.module(myAppName).service('sharedDataService', ['$log','$rootScope',
function($log,$rootScope)
{
    this.setAlert=function(alert){
     $rootScope.$broadcast('alertUpdated', alert);
};

  function updateOnlineStatus(event)
{
      $rootScope.$broadcast('onlineStatusChanged', navigator.onLine);
}
     
    
 window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);    

}]);

