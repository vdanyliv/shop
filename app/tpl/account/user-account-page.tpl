<div class="row account-details">
	<div class="text-left"><h3>Account</h3></div>
	<div ng-if="account.updateMsg">
		<p class="info-updated bg-primary">{{ account.updateMsg }}</p>
	</div>
	<form name="userDetailsForm" ng-if="account.userInfo" ng-submit="account.updateInfo()">
		<div class="form-group">
			<label for="name">Name</label>
			<input id="name" type="text" ng-model="account.userInfo.name" class="form-control" placeholder="Your name" ng-required="account.required">
		</div>
		<div class="form-group">
			<label for="email">Email</label>
			<input id="email" type="email" ng-model="account.userInfo.email" class="form-control" placeholder="Your email" ng-required="account.required">
		</div>
		<div class="form-group">
			<label for="address">Address</label>
			<input id="address" type="text" ng-model="account.userInfo.address" class="form-control" placeholder="Your address" ng-required="account.required">
		</div>
		<div class="form-group">
			<input type="submit" class="form-control btn btn-primary">
		</div>
	</form>
</div>