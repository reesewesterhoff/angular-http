const shellApp = angular.module('ShellApp', []);
console.log('client.js loaded');

shellApp.controller('ShellController', ['$http', function($http){
    let self = this;
    self.number = 7;

    $http({
        method: 'GET',
        url: '/shells'
    }).then(function(response){
        console.log(response.data);
        self.shells = response.data;
    }).catch()
}]);


