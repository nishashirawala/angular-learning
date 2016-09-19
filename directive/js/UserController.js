var myApp = angular.module('userRegistrationApp');

myApp.controller('UserController',  function($http, UserService, $scope, User) {
	
	var vm = this;
	
	vm.users = [];
	vm.login = login;
	
	UserService.getAllUsernames().then(function(response){	
		vm.users = response.data.users;
	});

	function login() {
		var isValid = $scope.form.$valid;
		if(!isValid) {
			$scope.showErrorAlert = true;
			$scope.showSuccessAlert = false;
			return;			
		} else {			
			if(vm.users != undefined && vm.users.length >0) {
				for(var i=0; i< vm.users.length; i++) {
					var savedUserName = vm.users[i].username;
					if(savedUserName == form.username.value) {
						$scope.showErrorAlert = true;
						$scope.showSuccessAlert = false;
						$scope.form.username.$invalid = true;
						$scope.form.username.$error.taken = "Username already taken.";
						$scope.errorTextAlert = "Username already exists.";
						return;
					}
				}
			}
			var id = vm.users.length + 1;
			var newUser = $scope.user;
			newUser.id = id;
			UserService.saveUserData(newUser).then(function(response) {			
				if(response.status == 201) {
					$scope.showSuccessAlert = true;
					$scope.successTextAlert = "User saved successfully.";
					$scope.showErrorAlert = false;
				}
			});
		}
		

		
	}
	
});