/**
 * @module ui/experiment-report.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component,
    RangeController = require("montage/core/range-controller").RangeController,
    ResultOnlyView = require("core/data/result_only");

/**
 * @class ExperimentReport
 * @extends Component
 */
exports.ExperimentReport = Component.specialize( /** @lends ExperimentReport# */ {
    constructor: {
        value: function ExperimentReport() {
            this.super();
        }
    },

    stimuliResponsesController: {
        value: null
    },

    resultjson: {
        value: null
    },

    enterDocument: {
        value: function(firsttime) {
            if (firsttime) {
                if (!this.experimentalDesign && this.experimentId) {
                    var self  = this;

                    this.corpus.get(this.experimentId).then(function(doc) {
                        if (doc) {
                            self.experimentalDesign = doc;
                            self.calculateScore();
                        } else {
                            console.warn("Something is wrong, the experiment didnt get fetched.");
                        }
                    });
                } else {
                    console.log("not fetching the experiment's details");
                }
            }
        }
    },

    /**
     * An extremely simplistic score until we have normalization data, when this will change complete..
     * @type {Object}
     */
    calculateScore: {
        value: function() {
            // var totalScore = 0;
            // var totalStimuli = 0;
            this.results = [];
            var self = this;
            ResultOnlyView.emit = function(key, value) {
                self.scoreAsText = value.totalScore;
                self.results = value;
            };
            ResultOnlyView.map(this.experimentalDesign.toJSON());

            // for (var subexperimentIndex = 0; subexperimentIndex < this.experimentalDesign.subexperiments._collection.length; subexperimentIndex++) {
            //  var subexperiment = this.experimentalDesign.subexperiments._collection[subexperimentIndex];
            //  subexperiment.scoreSubTotal = 0;
            //  for (var stimulusIndex = 0; stimulusIndex < subexperiment.trials._collection.length; stimulusIndex++) {
            //      var stimulusToScore = subexperiment.trials._collection[stimulusIndex];
            //      if (stimulusToScore.responses && stimulusToScore.responses[stimulusToScore.responses.length - 1] && stimulusToScore.responses[stimulusToScore.responses.length - 1].score !== undefined) {
            //          stimulusToScore.response = stimulusToScore.responses[stimulusToScore.responses.length - 1];
            //          stimulusToScore.score = stimulusToScore.responses[stimulusToScore.responses.length - 1].score;
            //          this.results.push(stimulusToScore);
            //          subexperiment.scoreSubTotal += stimulusToScore.score;
            //          // this.experimentalDesign.result.push({
            //          //  stimulus: stimulusToScore.targetImage,
            //          //  response: stimulusToScor e.responses[stimulusToScore.responses.length - 1],
            //          //  score: stimulusToScore.responses[stimulusToScore.responses.length - 1].score
            //          // });
            //      } else {
            //          stimulusToScore.response = {
            //              choice: {
            //                  orthography: "NA"
            //              }
            //          };
            //          stimulusToScore.score = null;
            //          this.results.push(stimulusToScore);
            //      }
            //  }
            //  if (true || subexperiment.label.indexOf("practice") === -1) {
            //      totalScore += subexperiment.scoreSubTotal;
            //      totalStimuli += subexperiment.trials._collection.length;
            //  }
            // }
            // this.experimentalDesign.scoreTotal = totalScore;
            // this.scoreAsText = totalScore + "/" + totalStimuli;
            this.stimuliResponsesController = new RangeController().initWithContent(this.results);
            this.resultjson = JSON.stringify(this.results, null, 2);
            return this.scoreAsText;
        }
    },

    handleSaveAction: {
        value: function(){
            this.templateObjects.participantDetails.save();
        }
    }
});
