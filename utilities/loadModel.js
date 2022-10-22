const tfnode = require('@tensorflow/tfjs-node');
var path = require('path');

async function loadModel(){
    const model = await tfnode.node.loadSavedModel(path.join(__dirname,'..', 'colorTeller'));
    return model
  };

module.exports = loadModel;