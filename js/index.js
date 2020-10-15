new Vue({
	el: '#app',
	data: {
		size: null,
		speed: null,
		result: null
	},
	methods: {
		calculate() {
			if (!this.size || this.size == 0 || !this.speed) {
				this.result = null;
				return;
			}
			let result = this.size * 1000;
			result /= this.speed;
			result /= 3600;
			if (isNaN(result)) {
				return;
			}
			this.result = result.toFixed(2);
		}
	}
});