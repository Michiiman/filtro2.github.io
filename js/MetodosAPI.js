import { mostrarHtml, mostrarHtml2 } from "./Dom.js";
import { urlCiudades,urlDepartamentos }  from "./app.js"

//Metodos para el json
const headers = new Headers({ 'Content-Type': 'application/json' });
//POST
function post(data, url) {
    let config = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Object.fromEntries(data))
    };

    fetch(url, config)
        .then(response => response.json())
        .then(result => mostrarHtml(result))
}
//DELETE
function borrarDpt(id){
    
    let data =new FormData (id.target);
    console.log(data);

    let config = {
        method: "DELETE",
        headers: headers,
        body: JSON.stringify(Object.fromEntries(data))
    };

    fetch((`${urlDepartamentos}/${id}`), config)
        .then(response => response.json())
        .then(result => {
        mostrarHtml(result)
        })
}
function borrarCity(id){
    
    let data =new FormData (id.target);
    console.log(data);

    let config = {
        method: "DELETE",
        headers: headers,
        body: JSON.stringify(Object.fromEntries(data))
    };

    fetch((`${urlCiudades}/${id}`), config)
        .then(response => response.json())
        .then(result => {
        mostrarHtml2(result)
        })
}

//Exportaciones
export {post,borrarDpt,borrarCity};