app.controller('detailsCtrl', function($scope, $routeParams) {



  $.ajax({
    url: 'https://randomuser.me/api/?seed=rali&results=100',
    dataType: 'json',
    async: false,
    success: function(data) {
      //debugger;
      $scope.user = data.results[$routeParams.id];
    },
    error: function() {
      alert('api fail');
    }
  });

});
