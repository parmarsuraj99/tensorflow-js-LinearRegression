// Notice there is no 'import' statement. 'tf' is available on the index-page
// because of the script tag above.

// Define a model for linear regression.
const model = tf.sequential();
const model1 = tf.models.modelFromJSON('models/model.json');


model.add(tf.layers.dense({units: 1, inputShape: [1]}));

// Prepare the model for training: Specify the loss and the optimizer.
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

// Generate some synthetic data for training.
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);

const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// Train the model using the data.
model.fit(xs, ys);
// Use the model to do inference on a data point the model hasn't seen before:
// Open the browser devtools to see the output

document.getElementById("isLoaded").innerText=model.predict(tf.tensor2d([5], [1, 1]));