<div class="row product-section" ng-if="product.productList.length > 0">
	<div ng-repeat="(key, value) in product.productList" class="col-xs-12 col-sm-4 col-md-4 product-elem">
		<div class="product-title text-left"><h4><a href="/product/{{ value.id }}">{{ value.title }}</a></h4></div>
		<div class="details text-justify">
			{{value.description}}
		</div>
	</div>
</div>