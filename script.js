new Vue({
	el: '#app',
	data: {
		fontSize: 16,
		pxValue: 16,
		remValue: 1,
		pxArray: []
	},
	created(){
		for (var i = 1; i <= 40; i++) {
			this.pxArray.push({ 'px': i })
		}
	},
	computed: {
		columnOne() {
			return this.pxArray.slice(0, 10)
		},
		columnTwo() {
			return this.pxArray.slice(10, 20)
		},
		columnThree() {
			return this.pxArray.slice(20, 30)
		},
		columnFour() {
			return this.pxArray.slice(30, 40)
		}
	},
	watch : {
		pxValue: function(val) {
			this.pxValue = val.toFixed();
			this.remValue = parseFloat( (val / this.fontSize).toFixed(4) );
		},
		remValue: function (val) {
			this.pxValue = val * this.fontSize;
			this.remValue = val;
		},
		fontSize: function(val) {
			this.fontSize = val.toFixed();
			this.pxValue = this.remValue * val;
		}
	}
})