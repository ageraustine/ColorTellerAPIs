const createError = require('http-errors')
const loadModel = require('../utilities/loadModel')
const preprocess = require('../utilities/preprocess')
 
class MlModelController{
    static async getColor(req, res, next){
      try{
        const imageBuffer = req.file.buffer
        const model = await loadModel()
        const imageArray = await preprocess(imageBuffer)
        const predictions = await model.predict(imageArray)
      }
      catch(e){
        next(createError(e.statusCode, e.message))
      }  
    }
}

module.exports = MlModelController