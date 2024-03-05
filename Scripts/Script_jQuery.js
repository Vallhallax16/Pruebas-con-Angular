$(document).ready(function () {
    $("#validar_nombre").click(function () {
        $("#txt_nombre").css("color", "green");
    })

    //$("#foto_perfil").animate({left, "500px"});

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
        //window.alert("Registro enviado");
        $("#alerta").hide();

    } else {
        //window.alert("Por favor, completa todos los campos requeridos.");
        $("#alerta").show();
    }

    let json_armado = Armar_objeto();

    /*
    //ANTIGUA FORMA DE CREAR EL JSON
    var nombre_txt = $("#fname").val();
    console.log(nombre_txt);
    var ap_paterno_txt = $("#lname").val();
    console.log(ap_paterno_txt);
    var ap_materno_txt = $("#mname").val();
    console.log(ap_materno_txt);
    var telefono_txt = $("#phone").val();
    console.log(telefono_txt);
    var email_txt = $("#email").val();
    console.log(email_txt);
    var sexo_select = document.getElementById("sexo");
    var opciones = sexo_select.querySelectorAll('input[type="radio"]:checked');
    var sexo_txt_num = opciones.value;
    console.log("El sexo es " + opciones[0].value);
    var fecha_txt = $("#fecha").val();
    console.log(fecha_txt);
    var facultad_txt = $("facultad").val();
    console.log(facultad_txt);
    var campus = [];
    $('#checkboxes input:checked').each(function () {
        campus.push($(this).attr('name'));
    });
    console.log(campus);
    var semestre_txt = $("semestre").val();
    console.log(semestre_txt);
    var direccion_txt = $("#direccion").val();
    console.log(direccion_txt);
    var expectativas_txt = $("#expectativas").val();
    console.log(expectativas_txt);


    var clave = $("#clave").val();
    console.log("la clave es : " + clave);


    let obj = {nombre: nombre_txt, ap_paterno: ap_paterno_txt, ap_materno: ap_materno_txt, clave: clave, telefono: telefono_txt, email: email_txt, sexo:sexo_txt_num, fecha: fecha_txt, facultad: facultad_txt, semestre: semestre_txt, direccion: direccion_txt, expectativas: expectativas_txt, campus: campus};
    console.log(JSON.stringify(obj));*/

    $("#json").html(json_armado);

    Anexar_nuevo_registro(JSON.parse(json_armado));
}