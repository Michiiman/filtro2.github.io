//Import de funciones
import {post,borrarDpt,borrarCity} from "./MetodosAPI.js";
import {mostrarHtml,mostrarHtml2} from "./Dom.js"


//Variables
export const urlDepartamentos = 'http://localHost:3000/Departamentos';
export const urlCiudades = 'http://localHost:3000/Ciudades';
const formsDepartamentos = document.getElementById('departamento');
const btn_ciudades=document.getElementById('btnAddCiudades');


//----Eventos

//listeners
formsDepartamentos.addEventListener('submit', agregarDpt);

document.addEventListener('click',del=>{
    if(del.target.classList.contains('eliminar_dpt')){
        const boton=del.target.closest('button');
        boton.addEventListener('click',eliminar);
    }if(del.target.classList.contains('eliminar_ciudad')){
        const boton=del.target.closest('button');
        boton.addEventListener('click',eliminarciudad);
    }
});

btn_ciudades.addEventListener('click',agregarCiudades)

//call Functions
llamarAPI(urlDepartamentos,urlCiudades);

llamarAPICity(urlCiudades);

//Funciones
function agregarDpt(e){
    e.preventDefault();
    const formData = new FormData(formsDepartamentos);
    post(formData, urlDepartamentos);
}

function eliminar(e){
    let id=e.target.id;
    let cercano=e.target.closest(".card");
    borrarDpt(id);
    cercano.remove();
    llamarAPI(urlDepartamentos,urlCiudades);
}
function eliminarciudad(e){
    console.log('hola');
    let id=e.target.id;
    let cercano=e.target.closest(".card");
    borrarCity(id);
    cercano.remove();
    llamarAPICity(urlCiudades);
}

function agregarCiudades(){
    const ciudad=document.getElementById('ciudad');
    
    fetch(urlDepartamentos)
        .then(response => response.json())
        .then(result => {
            const apicity = result;
            console.log(apicity);
            apicity.forEach(element => {
                const select=document.createElement('option')
                select.innerHTML+=`
                    <option value="${element.id}">${element.nomDepartamento}</option>
                `
                ciudad.appendChild(select);
                        
            })
                        
                
        })
        
        .catch(error => {
            console.error(error);
        
    });


}
//Llamados a la API
function llamarAPI(url,url2) {
    fetch(url)
        .then(response1 => response1.json())
        .then(result1 => {
            const apiDpt = result1;

            fetch(url2)
                .then(response2 => response2.json())
                .then(result2 => {
                    const apicity = result2;
                    mostrarHtml(apiDpt, apicity);
                })
                .catch(error => {
                    console.error(error);
                });
        })
        .catch(error => {
            console.error(error);
        });
}
function llamarAPICity(url2){
    fetch(url2)
        .then(response2 => response2.json())
        .then(result2 => {
            const apicity = result2;
            mostrarHtml2(apicity);
        })
        .catch(error => {
            console.error(error);
        });
}

