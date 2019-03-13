// Notice there is no 'import' statement. 'tf' is available on the index-page
// because of the script tag above.

// Define a model for linear regression.

const model = tf.sequential();
//const model1 = tf.loadModel('https://github.com/parmarsuraj99/tensorflow-js-mnist/blob/master/scripts/models/model.json');

 model.add(tf.layers.dense({inputShape: [1], units: 1, useBias: true}));


// Prepare the model for training: Specify the loss and the optimizer.
model.compile({loss: 'meanSquaredError', optimizer: 'sgd', metrics: ['mse']});

// Generate some synthetic data for training.
const xs = tf.tensor2d([1, 2, 3, 4, 5], [5, 1]);
document.getElementById("X").innerHTML="X: "+xs;

const ys = tf.tensor2d([2, 4, 6, 8, 10], [5, 1]);
document.getElementById("Y").innerHTML="Y: "+ys;
// Train the model using the data.
model.fit(xs, ys, {epochs: 50});
// Use the model to do inference on a data point the model hasn't seen before:
// Open the browser devtools to see the output

document.getElementById("isLoaded").innerText="Prediction(5): "+model.predict(tf.tensor([6]));