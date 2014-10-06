exports.emit = function(key, value) {
  console.log(key, value);
};
exports.map = function(doc) {
  try {
    emit = emit || this.emit;
  } catch (e) {
    emit = this.emit;
  }

  try {
    if (doc.type === "SubExperimentDataList" && doc.results) {

      var totalScore = 0;
      var totalStimuli = 0;
      var totalAnswered = 0;
      var calculatedResults = [];

      var subexperiments = [];

      var experimentId = doc.relatedData[0].URI.split("?rev=")[0];
      var experimentRev = doc.relatedData[0].URI.split("?rev=")[1];

      if (doc && doc.results && doc.results) {
        subexperiments = JSON.parse(JSON.stringify(doc.results));
      }

      for (var subexperimentIndex = 0; subexperimentIndex < subexperiments.length; subexperimentIndex++) {
        var subexperiment = subexperiments[subexperimentIndex];
        subexperiment.scoreSubTotal = 0;

        var trials = [];
        if (subexperiment.results && subexperiment.results) {
          trials = subexperiment.results;
        }
        for (var stimulusIndex = 0; stimulusIndex < trials.length; stimulusIndex++) {
          var stimulusToScore = trials[stimulusIndex];

          if (stimulusToScore && stimulusToScore.responses && stimulusToScore.responses[stimulusToScore.responses.length - 1] && stimulusToScore.responses[stimulusToScore.responses.length - 1].score !== undefined) {
            stimulusToScore.response = stimulusToScore.responses[stimulusToScore.responses.length - 1];

            // emit("stimulusToScoreresponses", stimulusToScore.responses);
            stimulusToScore.response = stimulusToScore.response || {};
            stimulusToScore.response.choice = stimulusToScore.response.choice || {
              utterance: null
            };

            // stimulusToScore.stimulus = stimulusToScore.stimulus || {};
            // stimulusToScore.stimulus.utterance = stimulusToScore.stimulus.utterance || stimulusToScore.datumFields[1].label;

            stimulusToScore.score = parseFloat(stimulusToScore.responses[stimulusToScore.responses.length - 1].score, 10);
            var chosenImage = stimulusToScore.response.choice ? stimulusToScore.response.choice.utterance : null;
            if (chosenImage === "gʁi") {
              chosenImage = "gris";
            } else {
              chosenImage = "X";
            }

            var appropriateImage = stimulusToScore.target ? stimulusToScore.target.utterance : null;
            if (appropriateImage === "gʁi") {
              appropriateImage = "gris";
            } else {
              appropriateImage = "X";
            }
            calculatedResults.push({
              prime: stimulusToScore.prime ? stimulusToScore.prime.utterance : null,
              orthography: stimulusToScore.target ? stimulusToScore.target.orthography : null,
              // stimulus: stimulusToScore.stimulus ? stimulusToScore.stimulus.utterance : null,
              target: stimulusToScore.target ? stimulusToScore.target.utterance : null,
              response: stimulusToScore.response.choice ? stimulusToScore.response.choice.utterance : null,
              chosenImage: chosenImage,
              appropriateImage: appropriateImage,
              score: stimulusToScore.score
            });
            subexperiment.scoreSubTotal = subexperiment.scoreSubTotal + stimulusToScore.score;
            totalAnswered = totalAnswered + 1;
          } else {
            // stimulusToScore.response = {
            //  response: {
            //      orthography: "NA"
            //  }
            // };
            // stimulusToScore.score = null;
            // results.push(stimulusToScore);
          }
        }
        if (subexperiment.label.indexOf("practice") === -1) {
          totalScore = totalScore + subexperiment.scoreSubTotal;
          subexperiment.stimuliSubTotal = trials.length || 0.001;
          totalStimuli = totalStimuli + trials.length;
        }
        // emit("subexperiment", subexperiment.scoreSubTotal);
        subexperiment.calculatedResults = calculatedResults;
        calculatedResults = [];
      }
      totalStimuli = totalStimuli || 0.001;
      if (totalScore / totalStimuli * 100 >= doc.passingScore) {
        experimentConclusion = "Ce résultat est acceptable.";
      } else {
        experimentConclusion = "Ce résultat est sous la norme de passage.";
      }
      emit("sails", {
        totalScore: (totalScore / totalStimuli * 100) + "%",
        totalAnswered: totalAnswered,
        totalStimuli: totalStimuli,
        participant: doc.participant,
        experimenter: doc.experimenter,
        experimentId: experimentId,
        experimentRev: experimentRev,
        runDuration: doc.runDuration,
        startTime: doc.startTimestamp,
        endTime: doc.endTimestamp,
        experimentConclusion: experimentConclusion
        subexperiments: subexperiments.map(function(subexperiment) {
          return {
            score: (subexperiment.scoreSubTotal / subexperiment.stimuliSubTotal * 100) + "%",
            calculatedResults: subexperiment.calculatedResults,
            title: subexperiment.label
          };
        })
      });
    }
  } catch (e) {
    emit(e, 1);
  }
};



// function(doc) {
//     try {
//         emit = emit || this.emit;
//     } catch (e) {
//         emit = this.emit;
//     }

//     try {
//         if (doc.jsonType === "experiment") {

//             var totalScore = 0;
//             var totalStimuli = 0;
//             var totalAnswered = 0;
//             var results = [];

//             var subexperiments = [];
//             if (doc && doc.subexperiments && doc.subexperiments._collection) {
//                 subexperiments = doc.subexperiments._collection;
//             }
//             for (var subexperimentIndex = 0; subexperimentIndex < subexperiments.length; subexperimentIndex++) {
//                 var subexperiment = subexperiments[subexperimentIndex];
//                 subexperiment.scoreSubTotal = 0;

//                 var trials = [];
//                 if (subexperiment.trials && subexperiment.trials._collection) {
//                     trials = subexperiment.trials._collection;
//                 }
//                 for (var stimulusIndex = 0; stimulusIndex < trials.length; stimulusIndex++) {
//                     var stimulusToScore = trials[stimulusIndex];
//                     if (stimulusToScore.responses && stimulusToScore.responses[stimulusToScore.responses.length - 1] && stimulusToScore.responses[stimulusToScore.responses.length - 1].score !== undefined) {
//                         stimulusToScore.response = stimulusToScore.responses[stimulusToScore.responses.length - 1];
//                         stimulusToScore.score = stimulusToScore.responses[stimulusToScore.responses.length - 1].score;
//                         results.push({
//                             prime: stimulusToScore.prime ? stimulusToScore.prime.utterance : null,
//                             stimulus: stimulusToScore.stimulus ? stimulusToScore.stimulus.utterance : null,
//                             target: stimulusToScore.target ? stimulusToScore.target.utterance : null,
//                             response: stimulusToScore.response.choice ? stimulusToScore.response.choice.utterance : null,
//                             score: stimulusToScore.score
//                         });
//                         subexperiment.scoreSubTotal += stimulusToScore.score;
//                         totalAnswered++;
//                     } else {
//                         // stimulusToScore.response = {
//                         //  response: {
//                         //      orthography: "NA"
//                         //  }
//                         // };
//                         // stimulusToScore.score = null;
//                         // results.push(stimulusToScore);
//                     }
//                 }
//                 if (true || subexperiment.label.indexOf("practice") === -1) {
//                     totalScore += subexperiment.scoreSubTotal;
//                     totalStimuli += trials.length;
//                 }
//             }
//             emit(totalScore / totalAnswered, results);
//         }
//     } catch (e) {
//         emit(e, 1);
//     }
// }
