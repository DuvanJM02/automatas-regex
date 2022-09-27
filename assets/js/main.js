// document.getElementById('name').addEventListener('input', (e)=>{
//     document.getElementById('nombre').innerHTML = e.target.value;    
// });

const REGEXNAME = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;

let names = document.getElementById('name').value;

document.getElementById('name').addEventListener('input', (e)=>{
    if(REGEXNAME.test(names)){
        document.getElementById('nombre').innerHTML = e.target.value;   
    }else{
        document.getElementById('nombre').innerHTML = "Regex incorrecta";   
    }
});

