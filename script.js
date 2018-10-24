new Vue({
	el: '#app',
	data: {
		fontSize: 14,
		valuePx: 100
	},
	computed: {
		valueRem(){
			return (this.valuePx / this.fontSize).toFixed(2)
		}
	}
})