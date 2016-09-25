<div class="row product-details" ng-if="product.productDetails">
	<div class="text-left">
		<h3>{{ product.productDetails.title }}</h3>
	</div>
	<div class="col-md-4 col-sm-4 col-xs-4">
		<img src="{{ product.productDetails.img }}" class="img-responsive img-rounded product-img">
	</div>
	<div class="col-md-8 col-sm-8 col-xs-8 text-justify">
		{{ product.productDetails.description }}
		<div class="order-section">
			<button type="button" class="btn btn-primary" ng-click="product.buy=true" ng-disabled="product.buy">Order now!</button>
			<div class="order-form" ng-if="product.buy">
				<div><h4>Please provide contact information</h4></div>
				<form name="orderForm" ng-submit="product.makeOrder()">
						<div class="form-group">
							<label for="name">Name</label>
							<input id="name" type="text" ng-model="product.order.name" class="form-control" placeholder="Your name" ng-required="product.required">
						</div>
						<div class="form-group">
							<label for="email">Email</label>
							<input id="email" type="email" ng-model="product.order.email" class="form-control" placeholder="Your email" ng-required="product.required">
						</div>
						<div class="form-group">
							<label for="address">Address</label>
							<input id="address" type="text" ng-model="product.order.address" class="form-control" placeholder="Your address" ng-required="product.required">
						</div>
						<div class="form-group">
							<label for="date">Enter delivery date expectation</label>
							<input id="date" type="date" ng-model="product.order.date" class="form-control" placeholder="Delivery time" ng-required="product.required">
						</div>
						<div class="form-group">
							<label for="time">Enter delivery time expectation</label>
							<input id="time" type="time" ng-model="product.order.time" class="form-control" placeholder="Delivery time" ng-required="product.required">
						</div>
						<div class="form-group">
							<input type="submit" value="Confirm" class="form-control btn btn-primary">
						</div>
				</form>
			</div>
		</div>
	</div>
</div>