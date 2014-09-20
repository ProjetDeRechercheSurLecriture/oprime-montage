/**
 * @module ui/report.reel/main.reel
 * @requires core/contextualizable-component
 */
var OPrimeMain = require("ui/main.reel").Main;

/**
 * @class Main
 * @extends OPrimeMain
 */
exports.Main = OPrimeMain.specialize( /** @lends Main# */ {
	constructor: {
		value: function Main() {
			this.super();
		}
	},

	handleLocalesAction: {
		value: function(e) {
			console.log("handleLocalesAction", e);
			this.contextualizer.currentLocale = e.target.value;
			this.needsDraw = true;
		}
	},

	locales: {
		value: [{
			"iso": "en",
			"label": "English",
		}, {
			"iso": "fr",
			"label": "Français",
		}]
	}

});
