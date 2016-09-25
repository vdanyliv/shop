
export default function accountApi ($http) {
	let apiMethods = {},
	 	apiList = {
	 		getAccount: API_URL + '/api/getUserAccount',
	 		updateAccount: API_URL + '/api/updateAccount'
	 	};

	 /**
	  * getProducts`
	  * count: number
	  */
	 
	apiMethods.getUserAccount = (id) => {

	 	return $http({
	 		method: 'POST',
	 		url: apiList.getAccount,
	 		withCredentials: true,
	 		data: {
	 			id: id
	 		}
	 	}).then(
	 		function successCallback(response) {
	 			return response.data;
	 		},
		 	function errorCallback() {
		 		console.error('Error while requesting to ' + apiList.getProducts);
		 	}
		);
	};

	apiMethods.updateAccount = (userData) => {

	 	return $http({
	 		method: 'POST',
	 		url: apiList.updateAccount,
	 		withCredentials: true,
	 		data: userData
	 	}).then(
	 		function successCallback(response) {
	 			return response.data;
	 		},
		 	function errorCallback() {
		 		console.error('Error while requesting to ' + apiList.getProducts);
		 	}
		);
	};

	 return apiMethods;
}

accountApi.$inject = [ '$http' ];