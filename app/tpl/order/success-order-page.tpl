<div class="row product-details">
	<div class="text-left">
		<h3>Your order:</h3>
	</div>	
	
	<div class="order-item bg-success col-md-6" ng-repeat="(key, value) in order.basketService">
		<div><b>Product name:</b> {{ value.productName }}</div>
		<div><h5>Your Details</h5></div>
		<div><b>Name:</b> {{ value.name }}</div>
		<div><b>Email:</b> {{ value.email }}</div>
		<div><b>Address:</b> {{ value.address }}</div>
		<div><b>Arrive date:</b> {{ value.date | date:'MM/dd/yyyy' }} and time {{ value.time | date: 'HH:mm' }}</div>
	</div>

	<div class="text-left">
		<p class="info-updated bg-primary" ng-if="order.basketService.length > 0">
			Your information registered, we call you if we need more details from you.<br/>Thanks for your order.
		</p>
		<p class="info-updated bg-danger" ng-if="order.basketService.length === 0">
			Your basket empty. You can find something <a href="/product-list">here</a>
		</p>
	</div>
</div>
