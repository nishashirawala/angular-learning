var myApp = angular.module('userRegistrationApp');

myApp.service('UserService', function($http, $q, User) {

	this.getAllUsernames = function() {
		var deffered = $q.defer();

		var users = [];
		var promise = $http.get('http://localhost:3000/db');
		promise.then(function(response){
			users = response;
			deffered.resolve(users);
		});

		return deffered.promise;
	};

	this.saveUserData= function(userObj) {
		var deffered = $q.defer();

		var saveUser = userObj;
		// var saveUser = {"id": id, "username": username, "password":password, "firstname" : firstname, "lastname": lastname};
		$http.post('http://localhost:3000/users', saveUser).then(function(response) {			
	      deffered.resolve(response);
	    });
		
		return deffered.promise;
	};
});