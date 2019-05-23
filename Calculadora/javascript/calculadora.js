var val = "";
function ce(){
    document.getElementById("casillero").value = ""
    val = ""
}
function c(){
    document.getElementById("casillero").value = ""
}
function bs(){
    document.getElementById("casillero").value = res
}

function dato(x){
    val = val + x;
    document.getElementById("casillero").value = val
}

function operar(){
    document.getElementById("casillero").value = eval(val)
}