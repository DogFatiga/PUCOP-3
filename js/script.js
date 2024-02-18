document.addEventListener("DOMContentLoaded", function() {
    // Agregar evento clic al botón "Subir Formulario"
    document.getElementById("btn_subir").addEventListener("click", function(event) {
        event.preventDefault(); 

        // Recolectar los datos del formulario
        const cuilTitular = document.getElementById("cuil_titular").value.trim();
        const cuilBeneficiario = document.getElementById("cuil_beneficiario").value.trim();
        const codigoParentesco = document.getElementById("codigo_parentesco").value.trim();
        const tipoBeneficiario = document.getElementById("tipo_beneficiario").value.trim();
        const apellidosNombres = document.getElementById("apellidos_nombres").value.trim();
        const sexoDocumento = document.getElementById("sexo_documento").value.trim();
        const fechaNacimiento = document.getElementById("fecha_nacimiento").value.trim();
        const calle = document.getElementById("calle").value.trim();
        const numeroPuerta = document.getElementById("numero_puerta").value.trim();
        const piso = document.getElementById("piso").value.trim();
        const departamento = document.getElementById("departamento").value.trim();
        const codigoPostal = document.getElementById("codigo_postal").value.trim();
        const provincia = document.getElementById("provincia").value.trim();
        const fechaUltimoPago = document.getElementById("fecha_ultimo_pago").value.trim();
        const fechaCierrePadron = document.getElementById("fecha_cierre_padron").value.trim();

        if (
            cuilTitular === '' ||
            cuilBeneficiario === '' ||
            codigoParentesco === '' ||
            tipoBeneficiario === '' ||
            apellidosNombres === '' ||
            sexoDocumento === '' ||
            fechaNacimiento === '' ||
            calle === '' ||
            numeroPuerta === '' ||
            piso === '' ||
            departamento === '' ||
            codigoPostal === '' ||
            provincia === '' ||
            fechaUltimoPago === '' ||
            fechaCierrePadron === ''
        ) {
            alert('Por favor complete todos los campos obligatorios.');
            return; // Evitar que el formulario se envíe si faltan campos obligatorios
        }

        // Almacenar los datos
        localStorage.setItem("cuilTitular", cuilTitular);
        localStorage.setItem("cuilBeneficiario", cuilBeneficiario);
        localStorage.setItem("codigoParentesco", codigoParentesco);
        localStorage.setItem("tipoBeneficiario", tipoBeneficiario);
        localStorage.setItem("apellidosNombres", apellidosNombres);
        localStorage.setItem("sexoDocumento", sexoDocumento);
        localStorage.setItem("fechaNacimiento", fechaNacimiento);
        localStorage.setItem("calle", calle);
        localStorage.setItem("numeroPuerta", numeroPuerta);
        localStorage.setItem("piso", piso);
        localStorage.setItem("departamento", departamento);
        localStorage.setItem("codigoPostal", codigoPostal);
        localStorage.setItem("provincia", provincia);
        localStorage.setItem("fechaUltimoPago", fechaUltimoPago);
        localStorage.setItem("fechaCierrePadron", fechaCierrePadron);

        // Redirecciona a la página de informes
        window.location.href = "informes.html";
    });
});


document.getElementById("btn_limpiar").addEventListener("click", function(event) {
    document.getElementById('formulario').reset()
});