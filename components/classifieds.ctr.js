(function(){
"use strict";
   angular.module("ngClassifieds").controller("classifiedsCtrl",function($scope, $http, classifiedsFactory,$mdSidenav,$mdToast){
     
     classifiedsFactory.getClassifieds().then(function(response){
      $scope.classifieds=response.data;
      console.log(response);
    
     });
     var contact={
     name:"Swathi",
     phone:"(555)-555-5555",
     email:"abc@abc.com"
     };
     
     $scope.openSidebar=function(){
      $mdSidenav('left').open();
     }
     
     $scope.closeSidebar=function(){
     $mdSidenav('left').close();
     }
     
     $scope.saveClassified=function(classified){
      if(classified)
      {
      classified.contact=contact
      $scope.classifieds.push(classified);
      $scope.classified={};
      $scope.closeSidebar();
      $mdToast.show(
       $mdToast.simple().textContent("Classified Saved").position('top right').hideDelay(3000)
      );
      }
     }
   });
})();