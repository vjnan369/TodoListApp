var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function ($scope, $http) {
    console.log("hello world from controller");

    $scope.sortType = 'name';
    $scope.sortReverse = false;
    $scope.searchFish = '';

    var refresh = function() {
        $http.get('/todoList').success(function (response) {
            console.log("i got the data i requested");
            $scope.todoList = response;
            $scope.list = "";
        });
    };
    refresh();
    $scope.addTodoList = function(){
        console.log($scope.list);
        $http.post('/todoList', $scope.list).success(function(response){
            console.log(response);
            refresh();
        });
    };

    $scope.remove = function (id) {
      console.log(id);
      $http.delete('/todoList/'+ id).success(function (response) {
          refresh();
      })
    };

}]);