var myApp = angular.module('userRegistrationApp');

myApp.factory('User', function() {

	function User() {
		this.id='';
		this.username='';
		this.password='';
		this.firstname='';
		this.lastname='';
	}

	return User;

});