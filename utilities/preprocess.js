const tf = require('@tensorflow/tfjs');
const tfnode = require('@tensorflow/tfjs-node');

async function preprocess(imageBuffer){
    const model = tf.sequential({
        layers:[tf.layers.rescaling({scale:1/255, batchInputShape:[1,256,256,3]})]
    });
    let tensor = tfnode.node.decodeImage(imageBuffer);
    tensor  = tf.expandDims(tensor,0);
    tensor = tf.image.resizeBilinear(tensor,[256, 256]);
    const img = model.predict(tensor)
    img.print()
    return  img
}

module.exports = preprocess;