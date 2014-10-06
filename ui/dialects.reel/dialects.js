/**
 * @module ui/dialects.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var elanguages = require("fielddb/api/locales/elanguages.json");
/**
 * @class Dialects
 * @extends Component
 */
exports.Dialects = Component.specialize( /** @lends Dialects# */ {
	constructor: {
		value: function Dialects() {
			this.super();
			this.content = this.defaultList;
		}
	},

	enterDocument: {
		value: function(firstTime) {
			this.super(firstTime);

			if (firstTime) {
				var rangeController = this.templateObjects.rangeController;
				//Observe the selection for changes

				// rangeController.content = this.content;
				var self = this;
				if (this.content) {
					this.content.map(function(dialect) {
						if (self.selectedIso) {
							if (self.selectedIso === dialect.iso) {
								self.templateObjects.select.value = dialect;
								self.handleChange();
							}
						} else if (dialect.selected) {
							self.templateObjects.select.value = dialect;
							self.handleChange();
						}
					});
				}
			}
			this.element.addEventListener("change", this, false);
		}
	},

	handleChange: {
		value: function() {
			// console.log("handleChange", this.templateObjects.select.value);
			if (this.value !== this.templateObjects.select.value) {
				this.value = this.templateObjects.select.value;
				if (this.globalKey) {

					this.application[this.globalKey].iso = this.value.iso;
					this.application[this.globalKey].name = this.value.name;
					this.application[this.globalKey].nativeName = this.value.nativeName;

					var changeDialectEvent = document.createEvent("CustomEvent");
					changeDialectEvent.initCustomEvent("change" + this.globalKey, true, true, null);
					this.dispatchEvent(changeDialectEvent);
				}
			}
			console.log("Dialects handleChange", this.value);
		}
	},

	value: {
		value: null
	},


	defaultList: {
		value: elanguages
	}
});
