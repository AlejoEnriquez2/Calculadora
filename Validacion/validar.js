function validar(){

    var bandera = false;

    for (var i = 0; i<document.forms[0].length; i++){
        var elemento = document.forms[0].elements[i];
        if (elemento.value.trim() == ''){
            bandera = true;
            elemento.classList.add('error');
            break;
        }
    }

    if (bandera == true){

        alert('Llenar todos los campos');
        document.getElementById('p').classList.add('p');
        return false;

    } else {
        var fecha = validarFecha();
        var cedula = validarCedula();
        var correo = validarCorreo();
        if (fecha || cedula || correo) {
            return false;
        } else {
            return true;
        }

    }
}
function val_numero(string){
    var out = '';
    var filtro = '1234567890';//Caracteres validos
    
    //Recorre el value y verifica si el caracter se encuentra en la lista de validos 
    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1) 
        //Se añaden a la salida los caracteres validos
        out += string.charAt(i);
        //Retornar el valor filtrado
    return out;
} 
function val_letra(string){
    var out = '';
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ';//Caracteres validos
    
    //Recorre el value y verifica si el caracter se encuentra en la lista de validos 
    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1) 
        //Se añaden a la salida los caracteres validos
        out += string.charAt(i);
    
    //Retorna el valor filtrado
    return out;
} 
function dos_valores(string) {
    var out = '';
    var array = string.split(' ');
    if (array.length == 1){
        out += array[0];
    } else {
        out += array[0] + ' ' + array[1];
    }
    
    return out;
}
function validarFecha() {
    var array = document.getElementById('fecha').value.split('/');
    var fecha = new Date(array[2], array[1], array[0]);
    if (array.length == 3 && fecha 
        && array[0] == fecha.getDate() 
        && array[1] == fecha.getMonth() 
        && array[2] == fecha.getFullYear()) {
        return false;
    } else {
        document.getElementById('fecha').classList.add('error');
        document.getElementById('f').classList.add('p');
        alert('Fecha mal ingresada, usar formato dd/mm/yyyy');
        return true; //Inválida
    }
}

function validarCedula() {
    var cedula = document.getElementById('cedula').value.trim();
    if (cedula.substring(0, 2) > 24) {
        document.getElementById('cedula').classList.add('error');
        document.getElementById('c').classList.add('p');
        alert('Cédula no válida');
        return true;
    } else {
        return false;
    }
}

function validarCorreo() {
    var array = document.getElementById('email').value.split('@');

    if(array[0].length < 3) {
        document.getElementById('email').classList.add('error');
        alert('Correo no válido')
        return true;
    } else {
        if (!(array[1] == 'ups.edu.ec') && !(array[1] == 'est.ups.edu.ec')) {
            document.getElementById('email').classList.add('error');
            document.getElementById('e').classList.add('p');
            alert('Extensión no válida')
            return true;
        } else {
            return false;
        }
        
    } 
}