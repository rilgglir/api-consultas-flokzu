function consulta(){
  
    console.log("Ejecutando consulta");
    var matricula = Flokzu.getFieldValue([[Matricula]]);
    var generico = "https://api-consultas-flokzu.vercel.app/api/docs/"+matricula;
    var xhr = new XMLHttpRequest();

    xhr.open('GET', generico);
    console.log("Ejecutando consulta a "+generico);

    xhr.setRequestHeader('x-api-key', 'be517257-2017-4b07-97e3-ad733ac27bf6');
    
    xhr.onreadystatechange = function() { 
        console.log("Enviada consulta");
        if (xhr.readyState === 4) {  
            console.log("Consulta correcta");
        //Flokzu.setFieldValue([[ESTATUS]], obtenerValorPorClave("N",xhr.responseText)[0]);
        Flokzu.setFieldValue([[Descripcion]], xhr.responseText);
        console.log(xhr.responseText);

            
        } 
    }

    xhr.send();
}

Flokzu.onChange([[Matricula]], consulta);