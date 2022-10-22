const { VCOR_COLORS } = require("./constants");

function decodePrediction(predictions){
    let max = predictions[0];
    let index = 0;
    let count = 0;
    for(let prediction of predictions){
        if(+prediction > max){
            max = +prediction;
            index = count;
        }
        count = count + 1;
    }
    return VCOR_COLORS[index];
}

module.exports = decodePrediction