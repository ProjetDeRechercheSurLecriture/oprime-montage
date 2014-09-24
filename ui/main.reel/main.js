/**
 * @module ui/main.reel
 * @requires core/contextualizable-component
 */
var ContextualizableComponent = require("core/contextualizable-component").ContextualizableComponent,
	Contextualizer = require("core/experiment-contextualizer").Contextualizer,
	FieldDBObject = require("fielddb/api/FieldDBObject").FieldDBObject;

var enLocales = require("locale/en/messages.json");
var frLocales = require("locale/fr/messages.json");
/**
 * @class Main
 * @extends ContextualizableComponent
 */
exports.Main = ContextualizableComponent.specialize( /** @lends Main# */ {
	constructor: {
		value: function Main() {
			// localStorage.setItem("montage_locale", "fr");
			this.super();

			FieldDBObject.warn = function(){
				//dont warn
			};
			if (!this.application.contextualizer) {
				this.application.contextualizer = this.application.contextualizer || new Contextualizer();
				this.application.contextualizer.addMessagesToContextualizedStrings("en", enLocales);
				this.application.contextualizer.addMessagesToContextualizedStrings("fr", frLocales);
			}
		}
	}
});
