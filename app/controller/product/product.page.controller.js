export default class ProductPageController {
	constructor(productApiServise, accountApiService, basketService, $route, $location) {
		this.productId = $route.current.params.id;
		this.productApiServise = productApiServise;
		this.accountApiService = accountApiService;
		this.basketService = basketService;
		this.$location = $location;

		this.productDetails = {};
		this.order = {};
		this.required = true;
		this.buy = false;

		this.getUserInfo();
		this.showProduct();
	}

	getUserInfo() {
		//userId hardcoded!
		this.accountApiService.getUserAccount(1).then((data) => {
			this.order = data;
		});
	}

	showProduct() {
		this.productApiServise.getProduct(this.productId).then((data) => {
			this.productDetails = data;
			this.order.productName = data.title;
		});
	}

	makeOrder() {
		//doing somethink with order...
		//add new item into basket service
		this.basketService.addNewItem(this.order);
		this.$location.path('/order/status');
	}
}

ProductPageController.$inject = [ 'productApiServise', 'accountApiService', 'basketService', '$route', '$location' ];