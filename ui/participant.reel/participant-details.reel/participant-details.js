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

    draw: {
        value: function() {
            this.super();

            console.log(this.participant);
            if (this.participant.fields) {
                console.log("dob help " + this.participant.fields.dateOfBirth.help)
            } else {
                console.warn("this participant has no fields!", this.participant);
            }
            if (this.application.experiment.participant.fields) {
                console.log("dob help " + this.application.experiment.participant.fields.dateOfBirth.help)
            } else {
                console.warn("this participant has no fields!", this.application.experiment.participant);
            }
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
