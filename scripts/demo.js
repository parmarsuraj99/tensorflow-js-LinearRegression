// Notice there is no 'import' statement. 'tf' is available on the index-page
// because of the script tag above.

// Define a model for linear regression.

async function run(){
    //const model1 = tf.loadModel('https://github.com/parmarsuraj99/tensorflow-js-mnist/blob/master/scripts/models/model.json');
    const model =tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));


    // Prepare the model for training: Specify the loss and the optimizer.
    model.compile({loss: 'meanSquaredError', optimizer: 'sgd', metrics: ['mse']});

    // Generate some synthetic data for training.
    const xs = tf.tensor(xArr);
    const ys = tf.tensor(yArr);
    document.getElementById("X").innerHTML="X: "+xs;
    //const ys = tf.mul(xs, 2); 
    document.getElementById("Y").innerHTML="Y: "+ys;
    console.log("before fitting...")
    // Train the model using the data.
    await model.fit(xs, ys, {epochs: 10});
    console.log("fitting..")

    // Use the model to do inference on a data point the model hasn't seen before:
    // Open the browser devtools to see the output

    document.getElementById("isLoaded").innerText="Prediction(): "+model.predict(tf.tensor([4]));

}
