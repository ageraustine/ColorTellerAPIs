const colors = [
    "beige", "black", "blue", "brown", "gold", 
    "green", "grey", "orange", "pink", "purple", 
    "red", "silver","tarn", "white", "yellow"
];

function decodePrediction(predictions){
    let max = predictions[0];
    let index = 0;
    let count = 0;
    for(let prediction of predictions){
        if(prediction > max){
            max = prediction;
            index = count;
        }
        count = count + 1;
    }
    return colors[index];
}

module.exports = decodePrediction