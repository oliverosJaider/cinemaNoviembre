let peliculas=[
    {
        nombre:"amsterdam",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/AMSTERDAMNUEVO1.jpg?alt=media&token=502ffa4e-1c4b-4386-8e5a-1d3e59dc1fac"   
    },
    {
        nombre:"erase una vez",
        duracion:105,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/ERASE%20UNA%20VEZ.jpg?alt=media&token=02b21d96-719b-4cb5-b89e-0199e5c2e071"
    },
    {
        nombre:"la jauria",
        duracion:75,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/LA%20JAURIA.jpg?alt=media&token=0dad90d1-1e92-49da-8fd6-956a95b50936"
    },
    {
        nombre:"la mujer",
        duracion:80,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/LA%20MUJER.jpg?alt=media&token=d2b8a963-dcb6-491d-b027-a5daeb72360a"
    },
    {
        nombre:"los reyes del mundo",
        duracion:68,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/LOS%20REYES%20DEL%20MUNDO1.jpg?alt=media&token=754eeeff-d4e3-4776-862b-53f4ef3d077c"
    },
    {
        nombre:"sonrie",
        duracion:124,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/SONRIE1.jpg?alt=media&token=759d87fa-6b61-4ecb-aa85-4060fda90fdd"
    },
    {
        nombre:"super mascotas",
        duracion:114,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/SUPERMASCOTASNUEVO.jpg?alt=media&token=24e10a7b-d936-43b8-bf68-50b3d44fe66c"
    },
    {
        nombre:"minions2",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/minions2.jpg?alt=media&token=ec71abff-1cc4-49f1-bd86-d0a80b98af6d"
    },
    {
        nombre:"minions2",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/minions2.jpg?alt=media&token=ec71abff-1cc4-49f1-bd86-d0a80b98af6d"
    },
    {
        nombre:"minions2",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/minions2.jpg?alt=media&token=ec71abff-1cc4-49f1-bd86-d0a80b98af6d"
    },
    {
        nombre:"minions2",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/minions2.jpg?alt=media&token=ec71abff-1cc4-49f1-bd86-d0a80b98af6d"
    },
    {
        nombre:"minions2",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/minions2.jpg?alt=media&token=ec71abff-1cc4-49f1-bd86-d0a80b98af6d"
    },
    {
        nombre:"minions2",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajaider.appspot.com/o/minions2.jpg?alt=media&token=ec71abff-1cc4-49f1-bd86-d0a80b98af6d"
    },
]

let fila=document.getElementById("fila")
peliculas.forEach(function(pelicula){
    console.log(pelicula.poster)

    let foto=document.createElement("img")
    foto.src=pelicula.poster
    foto.classList.add("img-fluid", "w-100")

    fila.appendChild(foto)
})