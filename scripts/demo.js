// Notice there is no 'import' statement. 'tf' is available on the index-page
// because of the script tag above.

// Define a model for linear regression.
const model = tf.sequential();    
//const model1 = await tf.models.modelFromJSON('models/model.json');
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

// Prepare the model for training: Specify the loss and the optimizer.
model.compile({loss: 'meanSquaredError', optimizer: 'sgd', metrics: ['mse']});

const xs = tf.tensor(xArr);
const ys = tf.tensor(yArr);

async function run(){

    if(xArr.length == 0){
        document.getElementById('isLoaded').innerHTML="Need data...";
        return;
    }
    // Generate some synthetic data for training.
    const xs = tf.tensor(xArr);
    const ys = tf.tensor(yArr);

    document.getElementById("X").innerHTML="X: "+xs;
    //const ys = tf.mul(xs, 2); 
    document.getElementById("Y").innerHTML="Y: "+ys;
    console.log("before fitting...")
    document.getElementById('isLoaded').innerHTML="Data loaded...";
    // Train the model using the data.
    document.getElementById('isLoaded').innerHTML="Training...";
    await model.fit(xs, ys, {epochs: 200});
    console.log("fitting..")
    document.getElementById('isLoaded').innerHTML="Training Complete!";
    

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
async function random(){

    x=xArr;
    y=yArr;
    resetAll();
    x=tf.range(0, 9, 2, 'float32').as1D();
    tf.print(x.shape);
    //We just created some small random numbers and added them to yArr so
    //the data is a bit varied
    // Y=2*X-1
    y = tf.add(tf.mul(x, 2), -1).as1D();
    y=tf.add(y, tf.sum(tf.randomNormal([5, 1]).mul(0.1),1), 'float32').as1D();

    tf.print("X"+x);
    tf.print("Y"+y);

    document.getElementById("X").innerHTML="X: "+x;
    //const ys = tf.mul(xs, 2); 
    document.getElementById("Y").innerHTML="Y: "+y;
    document.getElementById('isLoaded').innerHTML="Data loaded...";
    document.getElementById('isLoaded').innerHTML="Training...";
    await model.fit(x, y, {epochs:200});
    document.getElementById('isLoaded').innerHTML="Training Complete!";
    document.getElementById('predict_form').style.visibility='visible';
}
