export default class ProductListController {
	constructor(productApiServise) {
		this.productApiServise = productApiServise;
		this.productList = [];
		
		this.showProductList();
	}

	showProductList() {
		this.productApiServise.getProducts().then((data) => {
			this.productList = data;
		});
	}
}

ProductListController.$inject = [ 'productApiServise' ]