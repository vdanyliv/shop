export default function basketService() {
	let basket = {};
		basket.basketItem = [];

	basket.addNewItem = (item) => {
		basket.basketItem.push(item);
	};

	basket.clear = () => {
		basket.basketItem = [];
	};

	return basket;
}