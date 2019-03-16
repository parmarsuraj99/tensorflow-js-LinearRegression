var xArr = new Array();
var yArr = new Array();

function resetAll(){
    document.getElementById('X').innerHTML='';
    document.getElementById('Y').innerHTML='';
    document.getElementById('xno').value='';
    document.getElementById('yno').value='';
    document.getElementById('isLoaded').innerText='';
    xArr=[];
    yArr=[];
    document.getElementById('predict_form').style.visibility='collapse';
   // resetModel();
}

function resetModel(){
    const model = tf.sequential();    
    //const model1 = await tf.models.modelFromJSON('models/model.json');
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));
    // Prepare the model for training: Specify the loss and the optimizer.
    model.compile({loss: 'meanSquaredError', optimizer: 'sgd', metrics: ['mse']});
}
function insert(){
    if(document.getElementById("xno").value !== '' && document.getElementById('yno').value!=''){
    xval=document.getElementById("xno").value;
    yval=document.getElementById('yno').value;
    xArr.push(Number(xval));
    yArr.push(Number(yval));
    document.getElementById('X').innerHTML='X: '+xArr;
    document.getElementById('Y').innerHTML='Y: '+yArr;
    document.getElementById('isLoaded').innerHTML="loaded";
    }
}


