
function confirmarEliminar(formId){
    var form = document.getElementById(formId);
    var msg = "¿Está seguro que desea eliminar el elemento seleccionado?";
    if(confirm(msg)){
        form.submit();
        return true;
    }
    return false;
}
function validarFecha(fecha, nombreItem){
    if(fecha == '' || fecha == null || fecha == 'dd/mm/aaaa' || fecha == 'aa/mm/dd'){
        alert(nombreItem+' está vacío');
        return false;
    }
    return true;
}
