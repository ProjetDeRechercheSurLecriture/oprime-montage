/**
 * @module ui/main.reel
 * @requires core/contextualizable-component
 */
var ContextualizableComponent = require("core/contextualizable-component").ContextualizableComponent,
	Contextualizer = require("core/contextualizer").Contextualizer;

var enLocales = require("oprime-montage/locale/en/messages.json");
var frLocales = require("oprime-montage/locale/fr/messages.json");
/**
 * @class Main
 * @extends ContextualizableComponent
 */
exports.Main = ContextualizableComponent.specialize( /** @lends Main# */ {
	constructor: {
		value: function Main() {
			// localStorage.setItem("montage_locale", "fr");
			this.super();

			if (!this.application.contextualizer) {
				this.application.contextualizer = this.application.contextualizer || new Contextualizer();
				this.application.contextualizer.addMessagesToContextualizedStrings("en", enLocales);
				this.application.contextualizer.addMessagesToContextualizedStrings("fr", frLocales);
			}
		}
	}
});
