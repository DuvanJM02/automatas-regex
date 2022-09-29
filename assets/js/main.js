// document.getElementById('name').addEventListener('input', (e)=>{
//     document.getElementById('nombre').innerHTML = e.target.value;    
// });

const REGEXNAME = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,50}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,50}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
const REGEXCODE = /^(?!0|1$)\d{1,8}$/;
const REGEXDATE = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
const REGEXLOC = /[A-Za-z0-9#'\.\-\s\,]$/;
const REGEXTEL = /[6][0-9]{0,6}$/;
const REGEXCEL = /[3][0-9]{0,9}$/;
const REGEXEMAIL = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

let n = document.getElementById('name').addEventListener('input', (e)=>{
    let names = document.getElementById('name').value;
    if(REGEXNAME.test(names)){
        document.getElementById('name-error').innerHTML = ''; 
        document.getElementById('nombre').innerHTML = e.target.value;   
    }else{
        document.getElementById('name-error').innerHTML = "Ingrese un nombre válido";   
    }
});

let c = document.getElementById('code').addEventListener('input', (e)=>{
    let code = document.getElementById('code').value;
    if(REGEXCODE.test(code)){
        document.getElementById('code-error').innerHTML = ''; 
    }else{
        document.getElementById('code-error').innerHTML = "Ingrese un código válido (solo números)";   
    }
});

let d = document.getElementById('date').addEventListener('input', (e)=>{
    let date = document.getElementById('date').value;
    if(REGEXDATE.test(date)){
        document.getElementById('date-error').innerHTML = ''; 
    }else{
        document.getElementById('date-error').innerHTML = "Ingrese una fecha válida con este formato (dd-mm-YYYY)";   
    }
});

let l = document.getElementById('location').addEventListener('input', (e)=>{
    let location = document.getElementById('location').value;
    if(REGEXLOC.test(location)){
        document.getElementById('loc-error').innerHTML = ''; 
    }else{
        document.getElementById('loc-error').innerHTML = "Ingrese una ubicación válida";   
    }
});

let t = document.getElementById('phone').addEventListener('input', (e)=>{
    let tel = document.getElementById('phone').value;
    if(REGEXTEL.test(tel)){
        document.getElementById('tel-error').innerHTML = ''; 
    }else{
        document.getElementById('tel-error').innerHTML = "Ingrese número válido y menor a 7 dígitos.";   
    }
});

let cel = document.getElementById('cel').addEventListener('input', (e)=>{
    let tel_cel = document.getElementById('cel').value;
    if(REGEXCEL.test(tel_cel)){
        document.getElementById('cel-error').innerHTML = ''; 
    }else{
        document.gecelementById('cel-error').innerHTML = "Ingrese número válido y menor a 10 dígitos.";   
    }
});

// let c = document.getElementById('phone').addEventListener('input', (e)=>{
//     let tel = document.getElementById('phone').value;
//     if(REGEXTEL.test(tel)){
//         document.getElementById('tel-error').innerHTML = ''; 
//     }else{
//         document.getElementById('tel-error').innerHTML = "Ingrese número válido y menor a 10 dígitos.";   
//     }
// });