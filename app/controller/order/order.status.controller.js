export default class OrderStatusController {
	constructor(basketService) {
		this.basketService = basketService.basketItem;
	}
}

OrderStatusController.$inject = [ 'basketService' ];