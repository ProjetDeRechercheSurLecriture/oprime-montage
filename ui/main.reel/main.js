/**
 * @module ui/main.reel
 * @requires core/contextualizable-component
 */
var ContextualizableComponent = require("core/contextualizable-component").ContextualizableComponent,
	Contextualizer = require("core/experiment-contextualizer").Contextualizer,
	FieldDB = require("fielddb/api/fielddb").FieldDB;

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

			FieldDB.FieldDBObject.warn = function() {
				//dont warn
			};
			FieldDB.FieldDBObject.bug = function(message) {
				console.log(message);
			};

			FieldDB.Database.prototype.BASE_DB_URL = "https://corpusdev.example.org";
			FieldDB.Database.prototype.BASE_AUTH_URL = "https://authdev.example.org";
			FieldDB.AudioVideo.prototype.BASE_SPEECH_URL = "https://speechdev.example.org";
			FieldDB.FieldDBObject.application = this.application;

			if (!this.application.contextualizer) {
				this.application.contextualizer = this.application.contextualizer || new Contextualizer();
				this.application.contextualizer.addMessagesToContextualizedStrings("en", enLocales);
				this.application.contextualizer.addMessagesToContextualizedStrings("fr", frLocales);
			}

		}
	}
});
