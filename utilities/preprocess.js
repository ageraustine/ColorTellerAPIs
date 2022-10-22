const tf = require('@tensorflow/tfjs')
const tfnode = require('@tensorflow/tfjs-node');

async function preprocess(imageBuffer){
    const tensor = tfnode.node.decodeImage(imageBuffer);
    const scalingLayer = tf.layers.rescaling(1/255);
    let img = scalingLayer(tensor);
    img = tf.expandDims(img,0);
    return tf.image.resizeBilinear(img,[256, 256]);
}

module.exports = preprocess;