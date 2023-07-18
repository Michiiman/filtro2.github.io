function mostrarHtml(dato1,dato2) {
    const caja_cartas = document.getElementById('caja_cartas');

    dato1.forEach(carta => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.innerHTML = `
            <img src="assets/img/ruta.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 id="carta_titulo" class="card-title" name=nomDepartamento>${carta.nomDepartamento}</h5>
                <p class="card-text">
                    <ul id="carta_ciudades">
                    </ul>
                </p>
                <div class="d-flex gap-3">
                <a><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalDetalleCiudades">Detalles</a>
                <button class="btn btn-danger eliminar_dpt" id ="${carta.id}" btndel="ready">Eliminar
                </div>
            </div>
        `;
        caja_cartas.appendChild(card);

        const carta_ciudades = card.querySelector('#carta_ciudades'); // Obtener la lista de puntos de la carta actual

        dato2.forEach(puntos => {
            if (carta.id == puntos.DepartamentosId) {
                const li = document.createElement('li');
                li.textContent = "Ciudad: "+ puntos.nomCiudad;
                carta_ciudades.appendChild(li);
            }
        });
    });
}

function mostrarHtml2(dato1){
    const caja_cartas2 = document.getElementById('caja_cartas2');
    dato1.forEach(carta => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.innerHTML = `
            <img src="${carta.imagen} " class="card-img-top" alt="...">
            <div class="card-body">
                <h5 id="carta_titulo" class="card-title" name=nomDepartamento>${carta.nomCiudad}</h5>
                <p class="card-text">
                    Coordenadas:<br>Lat: ${carta.coordenadas.lat}<br>Lon: ${carta.coordenadas.lon} 
                </p>
                <div class="d-flex gap-3">
                <button class="btn btn-danger eliminar_ciudad" id ="${carta.id}" btndel="ready">Eliminar
                </div>
            </div>
        `;
        caja_cartas2.appendChild(card);
    });

    
}
export{mostrarHtml,mostrarHtml2};