const shellApp = angular.module('ShellApp', []);

shellApp.controller('ShellController', [function(){
    let self = this;
    
    self.number = 7;

}]);

console.log('client.js loaded');
