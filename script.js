document.getElementById('registrarse').addEventListener('click', (e) => {
    e.preventDefault()
    const nombre = document.querySelector('#nombres').value;
    const apellidos = document.querySelector("#apellidos").value;
    const celular = document.querySelector("#celular").value;
    const correo = document.querySelector("#correo").value;

    const errores = document.querySelector("#errores");
    const aciertos = document.querySelector("#aciertos");
    if(nombre === "" || nombre === null || nombre === undefined) {
        errores.innerHTML = "El Espacio 'Nombres' no puede ir vacío."
    } else if(apellidos === "" || apellidos === null || apellidos === undefined) {
        errores.innerHTML = "El Espacio 'Apellidos' no puede ir vacío."
    } else if(celular === "" || celular === null || celular === undefined) {
        errores.innerHTML = "El Espacio 'Celular' no puede ir vacío."
    } else if(correo === "" || correo === null || correo === undefined) {
        errores.innerHTML = "El Espacio 'Correo' no puede ir vacío."
    } else {
        aciertos.innerHTML = "Fuiste Registrado Correctamente ✅"
        errores.innerHTML = ""
    }
})