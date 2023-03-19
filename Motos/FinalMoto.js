function contrato() {
    ////////////Titulo
    let Titulo = localStorage.getItem("Seccion");
    Titulo = JSON.parse(Titulo);

    let Ramo = Titulo[0].ramo;

    let Titulo_V = document.getElementById("Titulo_V");
    Titulo_V.innerHTML = `<h1 id="Titulo_V">PÓLIZA ${Ramo}</h1>`;

    ////////////Asegurado

    let Nombre_Asegurado = localStorage.getItem("arr_usuarios");
    Nombre_Asegurado = JSON.parse(Nombre_Asegurado);

    let nombre = document.getElementById("NomAS");
    nombre.innerHTML = `<h3 id="NomAS">Asegurado: ${Nombre_Asegurado[0].nombre}</h3>`;


    ////////////DatosGeneralesVehiculo
    //AÑO
    let DatosGeneralesVehiculo = localStorage.getItem("Datos_vehiculo");
    DatosGeneralesVehiculo = JSON.parse(DatosGeneralesVehiculo);

    let Ano_V = document.getElementById("Ano_V");
    Ano_V.innerHTML = `<h3 id="Ano_V">Año: ${DatosGeneralesVehiculo[0].Año}</h3>`;

    //Marca


    let Marca_V = document.getElementById("Marca_V");
    Marca_V.innerHTML = `<h3 id="Marca_V"> Marca: ${DatosGeneralesVehiculo[0].Marca}</h3>`;

    //Modelo


    let Mod_V = document.getElementById("Mod_V");
    Mod_V.innerHTML = `<h3 id="Mod_V"> Modelo: ${DatosGeneralesVehiculo[0].Modelo}</h3>`;


    //Valor

    let Val_V = document.getElementById("Val_V");
    Val_V.innerHTML = `<h3 id="Val_V"> Modelo:$ ${DatosGeneralesVehiculo[0].Valor}</h3>`;

    //Uso


    let Uso_V = document.getElementById("Uso_V");
    Uso_V.innerHTML = `<h3 id="Uso_V"> Uso: ${DatosGeneralesVehiculo[0].Uso}</h3>`;

    //CP

    let CP_V = document.getElementById("CP_V");
    CP_V.innerHTML = `<h3 id="CP_V"> CP: ${DatosGeneralesVehiculo[0].CP}</h3>`;


    ////////////DatosGeneralesEspecificos


    let Datos_Especificos = localStorage.getItem("Datos_IdentificacionVehiculo");
    Datos_Especificos = JSON.parse(Datos_Especificos);

    //Patente

    let Patente_V = document.getElementById("Patente_V");
    Patente_V.innerHTML = `<h3 id="Patente_V"> Patente: ${Datos_Especificos.Patente}</h3>`;

    //Chasis
    let Chasis_V = document.getElementById("Chasis_V");
    Chasis_V.innerHTML = `<h3 id="Chasis_V"> Patente: ${Datos_Especificos.Chasis}</h3>`;

    //Motor
    let Motor_V = document.getElementById("Motor_V");
    Motor_V.innerHTML = `<h3 id="Motor_V"> Patente: ${Datos_Especificos.Motor}</h3>`;


    ////////////DatosDelProducto

    let DatosDelProducto = localStorage.getItem("DatosCobertura");
    DatosDelProducto = JSON.parse(DatosDelProducto);

    //Plan

    let Plan_V = document.getElementById("Plan_V");
    Plan_V.innerHTML = `<h3 id="Plan_V"> Plan: ${DatosDelProducto[0].Paquete}</h3>`;

    //Cobertura

    let Cob_V = document.getElementById("Cob_V");
    Cob_V.innerHTML = `<h3 id="Cob_V"> Plan: ${DatosDelProducto[0].Coberturas}</h3>`;


    console.log(DatosDelProducto);
    //////////////Datos del Pago

    let mediosDePago = localStorage.getItem("mediosDePago");
    mediosDePago = JSON.parse(mediosDePago);

    // Medio de pago

    let textoMediosDePago = "";

    for (let i = 0; i < mediosDePago.length; i++) {
        if (i === 0) {
            textoMediosDePago += mediosDePago[i];
        } else {
            textoMediosDePago += " y " + mediosDePago[i];
        }
    }

    let MDP_V = document.getElementById("MDP_V");
    MDP_V.innerHTML = `<h3 id="MDP_V"> Medio de Pago: ${textoMediosDePago}</h3>`;

    //Cuota

    let Cuota_V = document.getElementById("Cuota_V");
    Cuota_V.innerHTML = `<h3 id="Plan_V"> Cuota Mensual:$ ${DatosDelProducto[0].cuota}</h3>`;

}

contrato()


