export default class AccountController {
	constructor(accountApiService, $timeout) {
		this.accountApiService = accountApiService;
		this.$timeout = $timeout;
		this.userId = 1; //harcoded data!
		this.updateMsg = '';
		this.userInfo = {};

		this.getUserInfo();
	}

	getUserInfo() {
		this.accountApiService.getUserAccount(this.userId).then((data) => {
			this.userInfo = data;
		});
	}

	updateInfo() {
		this.accountApiService.updateAccount(this.userInfo).then((data) => {
			this.updateMsg = data;
			this.$timeout(() => {
				this.updateMsg = '';
			}, 800);
			
		});
	}
}

AccountController.$inject = [ 'accountApiService', '$timeout' ];