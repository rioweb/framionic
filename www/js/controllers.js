angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'AlfaRomeo', id: 1},
    { title: 'Audi', id: 2},
    { title: 'Chevrolet', id: 3},
    { title: 'Fiat', id: 4},
    { title: 'Ford', id: 5},
    { title: 'Volkswagen', id: 6}
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
    
    $scope.models=[
        {     
     "names":[
         {"modelo":"Alfa z<sd", "codigo":"4"},
         {"modelo":"Alfa asdas", "codigo":"5"},
         {"modelo":"Alfa asdasd ", "codigo":"6"},
     ] },{
     "names":[
         {"modelo":"Alfa 1", "codigo":"4"},
         {"modelo":"Alfa 2", "codigo":"5"},
         {"modelo":"Alfa 3", "codigo":"6"},
     ]
    },
    {
    "names":[
         {"modelo":"A3", "codigo":"7"},
         {"modelo":"A4", "codigo":"8"},
         {"modelo":"A5", "codigo":"9"},
     ]
    }  
    ];
    
    $scope.number=$stateParams.playlistId;
    
    $scope.modelos=$scope.models[$scope.number];
    console.log($scope.modelos);
    
});
