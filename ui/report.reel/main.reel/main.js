/**
 * @module ui/report.reel/main.reel
 * @requires core/contextualizable-component
 */
var ContextualizableComponent = require("core/contextualizable-component").ContextualizableComponent;

var enLocales = require("locale/en/messages.json");
var frLocales = require("locale/fr/messages.json");

/**
 * @class Main
 * @extends ContextualizableComponent
 */
exports.Main = ContextualizableComponent.specialize( /** @lends Main# */ {
	constructor: {
		value: function Main() {
			this.super();

			if (!this.application.contextualizer) {
				this.application.contextualizer = this.application.contextualizer || new Contextualizer();
				this.application.contextualizer.addMessagesToContextualizedStrings("en", enLocales);
				this.application.contextualizer.addMessagesToContextualizedStrings("fr", frLocales);
			}
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
