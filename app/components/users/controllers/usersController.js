app.controller('usersListCtrl', function($scope) {

  var rez = 100;

  $.ajax({
    url: 'https://randomuser.me/api/?seed=rali&inc=name,location,picture&results=' + rez,
    dataType: 'json',
    async: false,
    success: function(data) {
      //debugger;
      $scope.users = data;
    },
    error: function() {
      alert('api fail');
    }
  });

});
