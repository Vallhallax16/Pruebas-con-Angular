$(document).ready(function () {
    $("#validar_nombre").click(function () {
        $("#txt_nombre").css("color", "green");
    })

    $("#ocultar_seccion").click(function () {
        $("#confirmado").show();
    })

    $("#flip1").click(function () {
        $("#panel1").slideDown(5000);
    });

    $("#bb").click(function () {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });

    XML_en_uso = GET_XML_en_uso(document.getElementById("Txt_on_off").innerText)
});

$("#alerta").hide();
$("#masKanye").click(function () {
    $("#foto_perfil").animate({height: '+=150px'});
});

$("#nocasa").click(function () {
    $("#direccion").html("No tengo casa");
});

$("#noexpectativas").click(function () {
    $("#expectativas").hide();
});

$("#pp").click(function () {
    $("#sexo").toggle();
});

$("#flip").click(function () {
    $("#panel").slideToggle("slow");
});

function valida() {
    var camposRequeridos = ["email", "phone", "fecha"];
    var formValido = true;

    camposRequeridos.forEach(function (campo) {
        var input = document.getElementById(campo);
        $(`#${campo}`).removeClass('required');
    });

    camposRequeridos.forEach(function (campo) {
        var input = document.getElementById(campo);
        if (!input.value) {
            $(`#${campo}`).addClass('required');
            formValido = false;
        }
    });

    if (formValido) {
        $("#alerta").hide();

    } else {
        $("#alerta").show();
    }

    let json_armado = Armar_objeto();

    $("#json").html(json_armado);

    if(XML_en_uso)
    {
        Anexar_nuevo_registro_XML(JSON.parse(json_armado));
    }
    else
    {
        Anexar_nuevo_registro_JSON(JSON.parse(json_armado));
    }

    Limpiar_registros();
}