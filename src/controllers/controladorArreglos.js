let nombres=["jaider","estefania","julian","matias","esteban"]

//escribir un ciclo que repita una accion

//for(let i=0; i<nombres.length; i++){
//    console.log(nombres[i])
//}

//forma de reescribir un ciclo for with js

//nombres.forEach(function(nombre){
 //   console.log(nombre)
//})

//let numeros=[1,2,3,4,5,6,7,8,9,10]

//numeros.forEach(function(numero){
//    console.log(numero*10)
//})

/*let numeros=[3500000, 5000000, 8000000]
numeros.forEach(function(numero){
    console.log(numero-(numero*19/100))
})*/

let calificaciones=[3.5,4,2,1.5,3]
let suma=0

calificaciones.forEach(function(calificacion){
    suma=suma+calificacion
})
console.log(suma/calificaciones.length)








