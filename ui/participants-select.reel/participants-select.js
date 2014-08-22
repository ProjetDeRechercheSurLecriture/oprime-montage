/**
 * @module ui/participants-select.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var Confidential = require("fielddb/api/confidentiality_encryption/Confidential").Confidential;
var Participant = require("fielddb/api/user/Participant").Participant;

/**
 * @class ParticipantsSelect
 * @extends Component
 */
exports.ParticipantsSelect = Component.specialize( /** @lends ParticipantsSelect# */ {
	constructor: {
		value: function ParticipantsSelect() {
		}
	},

	enterDocument: {
		value: function(firstTime) {
			this.super(firstTime);

			if (firstTime) {
				var self = this;

				this.application.corpus.fetchCollection("participants").then(function(rawParticipants) {
					console.log("fetched participants", rawParticipants);
					self.content = rawParticipants.map(function(rawParticipant) {
						rawParticipant.confidential = self.application.corpus.confidential;
						rawParticipant = new Participant(rawParticipant);
						// rawParticipant.decryptedMode = true;
						return rawParticipant;
					});
				});
				
				var rangeController = this.templateObjects.rangeController;
				//Observe the selection for changes

				// rangeController.content = this.content;
				if (this.content) {
					this.content.map(function(audience) {
						if (audience.selected) {
							self.templateObjects.select.value = audience;
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
			if (this._currentAudience !== this.templateObjects.select.value) {
				this._currentAudience = this.templateObjects.select.value;
				this.application.currentAudience = this._currentAudience;
				var changeAudienceEvent = document.createEvent("CustomEvent");
				changeAudienceEvent.initCustomEvent("changeCurrentAudience", true, true, null);
				this.dispatchEvent(changeAudienceEvent);
			}
			console.log("ParticipantsSelect handleChange", this._currentAudience);
		}
	},

	_currentAudience: {
		value: null
	}
});
