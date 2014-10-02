/**
 * @module ui/participant-details.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class ParticipantDetails
 * @extends Component
 */
exports.ParticipantDetails = Component.specialize( /** @lends ParticipantDetails# */ {
    constructor: {
        value: function ParticipantDetails() {
            this.super();
        }
    },

    enterDocument: {
        value: function(firstTime) {
            if (firstTime) {
                this.currentlyPlaying = false;
                this.experimentDisplayTimeStart = Date.now();

                this.application.participantLanguageOne = {
                    "iso": "Non applicable"
                };
                this.application.participantLanguageTwo = {
                    "iso": "Non applicable"
                };
                this.application.participantLanguageThree = {
                    "iso": "Non applicable"
                };

                this.application.addEventListener("changeparticipantLanguageOne", this);
                this.application.addEventListener("changeparticipantLanguageTwo", this);
                this.application.addEventListener("changeparticipantLanguageThree", this);
            }

            this.super(firstTime);
        }
    },

    handleChangeparticipantLanguageOne: {
        value: function(event) {
            console.log("handleChangeparticipantLanguageOne", event);
            if (!this.participant || !this.participant.fields || !this.participant.fields.languages) {
                console.warn(" the participant and/or its fields and/or its language are not defined. so changes to the language werent saved.");
                return;
            }
            this.participant.languageOne = this.application.participantLanguageOne;
        }
    },

    handleChangeparticipantLanguageTwo: {
        value: function(event) {
            console.log("handleChangeparticipantLanguageTwo", event);
            if (!this.participant || !this.participant.fields || !this.participant.fields.languages) {
                console.warn(" the participant and/or its fields and/or its language are not defined. so changes to the language werent saved.");
                return;
            }
            this.participant.languageTwo = this.application.participantLanguageTwo;
        }
    },

    handleChangeparticipantLanguageThree: {
        value: function(event) {
            console.log("handleChangeparticipantLanguageThree", event);
            if (!this.participant || !this.participant.fields || !this.participant.fields.languages) {
                console.warn(" the participant and/or its fields and/or its language are not defined. so changes to the language werent saved.");
                return;
            }
            this.participant.languageThree = this.application.participantLanguageThree;
        }
    },

    save: {
        value: function() {

            this.participant.save({
                username: this.experimenter.username,
                name: this.experimenter.name
            }).then(function(result) {
                this.participant.debug("participant was saved", result);
            }, function(error) {
                console.warn("participant was not saved", error);
            });
        }
    }

});
