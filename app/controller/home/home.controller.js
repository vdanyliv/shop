export default class HomeController {
	constructor(productApiServise) {
		this.productApiServise = productApiServise;
		this.product = [];

		this.loadProducts();
	}

	loadProducts() {
		this.productApiServise.getProducts(3).then((data) => {
			this.product = data;
		});
	}
}

HomeController.$inject = [ 'productApiServise'];