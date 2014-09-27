exports.emit = function(key, value) {
    console.log(key, value);
}
exports.map = function(doc) {
    try {
        emit = emit || this.emit;
    } catch (e) {
        emit = this.emit;
    }

    try {
        if (doc.jsonType === "experiment") {

            var totalScore = 0;
            var totalStimuli = 0;
            var totalAnswered = 0;
            var results = [];

            var subexperiments = [];
            if (doc && doc.subexperiments && doc.subexperiments._collection) {
                subexperiments = doc.subexperiments._collection;
            }
            for (var subexperimentIndex = 0; subexperimentIndex < subexperiments.length; subexperimentIndex++) {
                var subexperiment = subexperiments[subexperimentIndex];
                subexperiment.scoreSubTotal = 0;
                
                var trials = [];
                if (subexperiment.trials && subexperiment.trials._collection) {
                    trials = subexperiment.trials._collection;
                }
                for (var stimulusIndex = 0; stimulusIndex < trials.length; stimulusIndex++) {
                    var stimulusToScore = trials[stimulusIndex];
                    if (stimulusToScore.responses && stimulusToScore.responses[stimulusToScore.responses.length - 1] && stimulusToScore.responses[stimulusToScore.responses.length - 1].score !== undefined) {
                        stimulusToScore.response = stimulusToScore.responses[stimulusToScore.responses.length - 1];
                        stimulusToScore.score = stimulusToScore.responses[stimulusToScore.responses.length - 1].score;
                        results.push({
                            prime: stimulusToScore.prime ? stimulusToScore.prime.utterance : null,
                            stimulus: stimulusToScore.stimulus ? stimulusToScore.stimulus.utterance : null,
                            target: stimulusToScore.target ? stimulusToScore.target.utterance : null,
                            response: stimulusToScore.response.choice ? stimulusToScore.response.choice.utterance : null,
                            score: stimulusToScore.score
                        });
                        subexperiment.scoreSubTotal += stimulusToScore.score;
                        totalAnswered++;
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
                if (true || subexperiment.label.indexOf("practice") === -1) {
                    totalScore += subexperiment.scoreSubTotal;
                    totalStimuli += trials.length;
                }
            }
            emit(totalScore / totalAnswered, results);
        }
    } catch (e) {
        emit(e, 1);
    }
}
