// Notice there is no 'import' statement. 'tf' is available on the index-page
// because of the script tag above.

// Define a model for linear regression.
const model = tf.sequential();    
//const model1 = await tf.models.modelFromJSON('models/model.json');
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

// Prepare the model for training: Specify the loss and the optimizer.
model.compile({loss: 'meanSquaredError', optimizer: 'sgd', metrics: ['mse']});

function getXY(){

}


const xs = tf.tensor(xArr);
const ys = tf.tensor(yArr);

async function run(){

    // Generate some synthetic data for training.
    const xs = tf.tensor(xArr);
    const ys = tf.tensor(yArr);

    document.getElementById("X").innerHTML="X: "+xs;
    //const ys = tf.mul(xs, 2); 
    document.getElementById("Y").innerHTML="Y: "+ys;
    console.log("before fitting...")
    // Train the model using the data.
    await model.fit(xs, ys, {epochs: 150});
    console.log("fitting..")
    document.getElementById('predict_form').style.visibility='visible';
    // Use the model to do inference on a data point the model hasn't seen before:
    // Open the browser devtools to see the output

}
function myFunction() {
    var xA = new Array();
    xval=document.getElementById('predno').value;
    xA.push(Number(xval));
    document.getElementById("isLoaded").innerText="Prediction("+xval+"):"+model.predict(tf.tensor((xA)));
}
function random(){
    xArr=tf.range(0, 9, 2, 'float32');
    tf.print(xArr.shape);
    //We just created some small random numbers and added them to yArr so
    //the data is a bit varied
    // Y=2*X-1
    yArr = tf.add(tf.mul(xArr, 2), -1);
    yArr=tf.add(yArr, tf.sum(tf.randomNormal([5, 1]).mul(0.1),1));

    tf.print("X"+xArr);
    tf.print("Y"+yArr);
    
}
