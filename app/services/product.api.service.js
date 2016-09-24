
export default function productApi ($http) {
	let apiMethods = {},
	 	apiList = {
	 		getProducts: API_URL + '/api/getProducts',
	 		getProduct: API_URL + '/api/getProduct',
	 		buyProduct: API_URL + '/api/buyProduct'
	 	};

	 /**
	  * getProducts`
	  * count: number
	  */
	 
	 apiMethods.getProducts = (count) => {
	 	if (!count) count = 100;
	 	return $http({
	 		method: 'POST',
	 		url: apiList.getProducts,
	 		withCredentials: true,
	 		data: {
	 			count: count
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

	 apiMethods.getProduct = () => {
	 	console.error(2);
	 	console.error($http);
	 };

	 apiMethods.buyProduct = () => {
	 	console.error(3);
	 	console.error($http);
	 };


	 return apiMethods;
}

productApi.$inject = [ '$http' ];