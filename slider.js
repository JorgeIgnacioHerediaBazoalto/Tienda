//almacecnar slider en variable
var slider=$('#slider');
//almacenar botones
var siguiente=$('#btn-next');
var anterior=$('#btn-prev')

//mover ultima imagen al principio
$('#promos section:last').insertBefore('#promos section:first')
//mostrar la primera imagen
promos.css('marginLeft', '-'+100+'%');

function mover() {
    promos.animate({marginLeft:'-'+200+'%'
    }, 700, function(){

    })
}

siguiente.on('click', function() {
    moverD();
});