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
		value: function ParticipantsSelect() {}
	},

	enterDocument: {
		value: function(firstTime) {
			this.super(firstTime);

			if (firstTime) {
				var self = this;

				this.application.corpus.fetchCollection("participants").then(function(rawParticipants) {
					console.log("fetched participants", rawParticipants);
					self.content = rawParticipants.map(function(rawParticipant) {
						rawParticipant = new Participant(rawParticipant);
						if (!self.application.corpus.confidential || !self.application.corpus.confidential.secretkey) {
							console.log("self.application.corpus.confidential is not ready");
						} else {
							rawParticipant.confidential = self.application.corpus.confidential;
							rawParticipant.decryptedMode = true;
						}
						return rawParticipant;
					});
				});

				var rangeController = this.templateObjects.rangeController;
				//Observe the selection for changes

				// rangeController.content = this.content;
				if (this.content) {
					this.content.map(function(participant) {
						if (participant.selected) {
							self.templateObjects.select.value = participant;
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
			if (this._currentParticipant !== this.templateObjects.select.value) {
				this._currentParticipant = this.templateObjects.select.value;
				this.application.experiment.participant = this._currentParticipant;
				var changeParticipantEvent = document.createEvent("CustomEvent");
				changeParticipantEvent.initCustomEvent("changeCurrentParticipant", true, true, null);
				this.dispatchEvent(changeParticipantEvent);
			}
			console.log("ParticipantsSelect handleChange", this._currentParticipant);
		}
	},

	_currentParticipant: {
		value: null
	}
});
