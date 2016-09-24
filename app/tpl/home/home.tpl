<div class="row top">
	<div class="col-xs-12 col-sm-6 col-md-8">Welcome to Shopify</div>
	<div class="col-xs-6 col-md-4 text-to-right">Hi, <i>username</i></div>
</div>
<div class="row top">
	<div class="cold-xs-16 col-sm-6 col-md-12">
		<nav>
			<a href="/">Home</a>
			<a href="/product-list">Product list</a>
			<a href="/account">Account</a>
		</nav>
	</div>
</div>
{{product}}
<div class="row product-section" ng-if="home.product.length > 0">
	<div ng-repeat="(key, value) in home.product" class="col-md-4 product-elem">
		<div class="product-title text-left"><h4><a href="/product/{{ value.id }}">{{ value.title }}</a></h4></div>
		<div class="details text-justify">
			{{value.description}}
		</div>
	</div>
</div>