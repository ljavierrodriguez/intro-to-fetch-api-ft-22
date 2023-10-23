console.log("Hola Mundo!")

const promesa = new Promise((completada, rechazada) => {
    setTimeout(() => {
        //completada("Tarea completada")
        rechazada("Ocurrio un error, por favor intente mas tarde!")
    }, Math.floor(Math.random() * 5000) + 1)
})

promesa.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

const response = obtenerDatos();

response.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

console.log("Saludos a todos!")

function obtenerDatos(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Otra promesa ejecutada")
        }, Math.floor(Math.random() * 3000) + 1)
    })
}

const url = "https://rickandmortyapi.com/api/character?page=2";
const opciones = {
    method: 'GET', // GET, POST, PUT, DELETE
    // body: "", // POST, PUT
    headers: {
        'Content-Type': 'application/json',
        //'Authorization': ''
    }
};

const responseFetch = fetch(url, opciones)
responseFetch.then((response) => {
    // Aqui trabajamos con la respuesta (response) obtenida del servidor
    // Esta respuesta contiene informacion sobre el estado de la peticion y la informacion solicitada
    // Por ejemplo: si estamos trabajando en formato json debemos retornar los datos usando response.json
    console.log(response)
    console.log(response.status) // 200 // 301
    if(response.status === 404) throw new Error("Pagina no encontrada!")
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})


