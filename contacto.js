function validarDatos () {
    if ($(this).val() == "") {
        alert("El campo "+$(this).attr('name')+ " requiere ser llenado")        
    }
}

$('form input').blur(validarDatos)

function enviar () {
    alert("Formulario enviado exitosamente")
    $('form').submit()
}

$("#boton").click(enviar)