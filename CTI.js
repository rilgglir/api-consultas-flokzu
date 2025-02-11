function validaciones(msg,boton){

    if(Flokzu.getFieldValue([[Cambio valido para este formulario?]])==false){
  
        swal( {type : 'info' , title : 'Cambio no valido' , text: "Tipo de cambio no valido"} );
        Flokzu.error( [[Cambio valido para este formulario?]] , "Motivo no valido para este proceso" );
      
    }
  
}



function bajas(){
    if(Flokzu.getFieldValue([[Estado actual]]).includes("Matriculado") && Flokzu.getFieldValue([[Estado solicitado]]).includes("Baja")){
        Flokzu.setRequired([[ID de retencion]]);
    }else{
        Flokzu.setHidden([[ID de retencion]]);
    }
}

Flokzu.onInit( bajas);
Flokzu.onAction(validaciones);
Flokzu.onChange([[Estado solicitado]] , bajas);