console.log("script.js angular 1.4.3 version v1");

angular.module('BasicApiGet', [])
.controller('GetRecordData', function($scope, $http) {
    
    console.log("controller called");
    $http.get('http://localhost:8080/getrecord').
        then(function(response) {
            console.log("data=",response.data)
            $scope.record = response.data;
        });
});

