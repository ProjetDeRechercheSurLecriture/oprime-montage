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
            for (var subexperimentIndex = 0; subexperimentIndex < doc.subexperiments._collection.length; subexperimentIndex++) {
                var subexperiment = doc.subexperiments._collection[subexperimentIndex];
                subexperiment.scoreSubTotal = 0;
                for (var stimulusIndex = 0; stimulusIndex < subexperiment.trials._collection.length; stimulusIndex++) {
                    var stimulusToScore = subexperiment.trials._collection[stimulusIndex];
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
                    totalStimuli += subexperiment.trials._collection.length;
                }
            }
            emit(totalScore / totalAnswered, results);
        }
    } catch (e) {
        emit(e, 1);
    }
}
