const createError = require('http-errors');
const decodePrediction = require('../utilities/decodePredictions');
const loadModel = require('../utilities/loadModel');
const preprocess = require('../utilities/preprocess');
 
class MlModelController{
    static async getColor(req, res, next){
      try{
        const imageBuffer = req.file.buffer;
        const model = await loadModel();
        const imageArray = await preprocess(imageBuffer);
        let predictions = model.predict(imageArray);
        predictions = await predictions.array();
        const color = decodePrediction(predictions[0]);
        res.status(200).json({"color":color});
      }
      catch(e){
        next(createError(e.statusCode, e.message));
      }  
    }
}

module.exports = MlModelController