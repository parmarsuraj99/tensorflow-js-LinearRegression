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
}
function insert(){
    if(document.getElementById("xno").value !== '' && document.getElementById('yno').value!=''){
    xval=document.getElementById("xno").value;
    yval=document.getElementById('yno').value;
    xArr.push(Number(xval));
    yArr.push(Number(yval));
    document.getElementById('X').innerHTML='X: '+xArr;
    document.getElementById('Y').innerHTML='Y: '+yArr;
    }
}


