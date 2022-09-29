// document.getElementById('name').addEventListener('input', (e)=>{
//     document.getElementById('nombre').innerHTML = e.target.value;    
// });

const REGEXNAME = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,50}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,50}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
const REGEXCODE = /^(?!0|1$)\d{1,8}$/;
const REGEXDATE = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
const REGEXLOC = /[A-Za-z0-9#'\.\-\s\,]$/;
const REGEXTEL = /^(6)[0-9]{0,6}$/;
const REGEXCEL = /^(3)[0-9]{0,9}$/;
const REGEXEMAIL = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

let n = document.getElementById('name').addEventListener('input', (e)=>{
    let names = document.getElementById('name').value;
    validateForm(e, REGEXNAME, names);
});

let c = document.getElementById('code').addEventListener('input', (e)=>{
    let code = document.getElementById('code').value;
    validateForm(e, REGEXCODE, code);
});

let d = document.getElementById('date').addEventListener('input', (e)=>{
    let date = document.getElementById('date').value;
    validateForm(e, REGEXDATE, date);
});

let l = document.getElementById('location').addEventListener('input', (e)=>{
    let location = document.getElementById('location').value;
    validateForm(e, REGEXLOC, location);
});

let t = document.getElementById('phone').addEventListener('input', (e)=>{
    let tel = document.getElementById('phone').value;
    validateForm(e, REGEXTEL, tel);
});

let cel = document.getElementById('cel').addEventListener('input', (e)=>{
    let tel_cel = document.getElementById('cel').value;
    validateForm(e, REGEXCEL, tel_cel);
});

let em = document.getElementById('email').addEventListener('input', (e)=>{
    let email = document.getElementById('email').value;
    validateForm(e, REGEXEMAIL, email);
});

function validateForm(event, regn, dato){
    console.log(event.target.id)
    // if(arrayInputs() == false){
    //     document.getElementById('enviar').setAttribute('disabled', 'true');
    // }else{
    //     document.getElementById('enviar').removeAttribute('disabled');
    // }
    if(regn.test(dato)){
        document.getElementById(event.target.id + '-error').innerHTML = ''; 
        document.getElementById('enviar').removeAttribute('disabled');
    }else{
        document.getElementById('enviar').setAttribute('disabled', 'true');
        switch (event.target.id) {
            case "name":
                document.getElementById(event.target.id + '-error').innerHTML = "Ingrese un nombre válido.";  
                break;
            case "code":
                document.getElementById(event.target.id + '-error').innerHTML = "Ingrese un código válido (solo números).";  
                break;
            case "date":
                document.getElementById(event.target.id + '-error').innerHTML = "Ingrese una fecha válida con este formato (dd-mm-YYYY)";  
                break;
            case "location":
                document.getElementById(event.target.id + '-error').innerHTML = "Ingrese una ubicación válida.";  
                break;
            case "phone":
                document.getElementById(event.target.id + '-error').innerHTML = "Ingrese número válido que empiece por 6 y menor a 7 dígitos.";  
                break;
            case "cel":
                document.getElementById(event.target.id + '-error').innerHTML = "Ingrese número válido que debe empezar por el numero 3 y menor a 10 dígitos.";  
                break;
            case "email":
                document.getElementById(event.target.id + '-error').innerHTML = "Ingrese un correo válido.";  
                break;
            default:
                console.log('rellene bien los campos')
                break;
        } 
    }
}

window.onload = () =>{
    let inputs = document.querySelectorAll('input');

    for(var i; i <= inputs.length; i++){
        console.log(inputs[i]);
    }
}


function saveStudent(e){
    e.preventDefault();

    arrayInputs();

    return;
}

Mi perfil es "Hotel Isla del Encanto", cuando se busca Isla del Encanto en Google aparece un resultado llamado "LA ISLA DEL ENCANTO" con ubicación en "Urb. Villa de la Candelaria, Mz. 26, Lote 6, Provincia de Cartagena, Bolívar" el cual causa confusión ya que muchos de nuestros clientes terminan dando sus opiniones allí y no es conveniente, por lo que solicitamos si es posible retirar ese perfil o qué otra forma habría para solucionar este inconveniente.