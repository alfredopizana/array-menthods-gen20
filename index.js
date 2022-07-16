
// Array de 5 Frutas

// Se le aplica map . Resulta un array de 5 nuevos elementos

var frutas = ["apple", "banana","orange","watermelon"]
//console.log(frutas);
var nuevasFrutas = frutas.map((fruta,index)=>{
    //console.log(`Elemento #${index} tiene el valor de: ${fruta}`)
    let iniciales = fruta.slice(0,2);
    return iniciales;
})
//console.log(nuevasFrutas);

//Filter itera en el arreglo y 
// retorna un nuevo arreglo con los elementos que la cumplan la codicion
// del filter

var frutasFiltradas = frutas.filter(function(fruta) {
    //console.log(`La fruta a filtrar es #${fruta}`)
    let ultimaLetra = fruta.charAt(fruta.length-1)
    //console.log(`El resultado del chartAt ${ultimaLetra}`)
    let cumpleConLaCodicion = ultimaLetra == "e";
    //console.log(`La fruta ${fruta} termina con e: ${cumpleConLaCodicion}`)
    return cumpleConLaCodicion;
})
//console.log(frutasFiltradas)

var mentores =[
    {
        nombre: "Alfred",
        apellido: "Pizana",
        modulo: "Maquetado"
    },
    {
        nombre: "Angel",
        apellido: "Resendiz"
    },
    {
        nombre: "Ferdinand",
        apellido: "Bracho",
        modulo: "Javascript"
    },
    {
        nombre: "Ale",
        apellido: "Paez"
    }
];

mentores.map((mentor)=>{
    mentor.nombreCompleto = `${mentor.nombre} ${mentor.apellido}` ;
    return mentor;
})

console.log(mentores)

// Reduce - Retorna la lista final del acumulador.

let mentoresConA = mentores.reduce(
    //Primera parte del reduce / Callback function
    (acumulador,mentor,posicion,arregloOriginalSinModificar)=>{

        //Primera iteracion acumulador  []
        //Segunda Iteracion acumulador [{nombre:"Alfredo"..}.....]
        //Tercera Iteracion acumulador [{nombre:"Alfredo"...},{nombre:"Angel"...}.....]
        let cumpleConLaCodicion = mentor.nombre.charAt(0) == "A";
        if(cumpleConLaCodicion){
            acumulador.push(mentor);
        }
        //Primera Iteracion - acumulador  [{nombre:"Alfredo"}.....]
        //Segunda Iteracion - acumulador  [{nombre:"Alfredo"},{nombre:"Angel"} .....]
        //Tercera Iteracion - acumulador  [{nombre:"Alfredo"},{nombre:"Angel"} .....] !Nota: el objeto con nombre Ferdinand no se incluyo en acumulador por lo tanto el arreglo permance con dos elementos
        //Cuarta Iteracion  - acumulador  [{nombre:"Alfredo"},{nombre:"Angel"},{nombre:"Ale"} .....]
        return acumulador;
    },
    //Inicializacion
    []
);
console.log(mentoresConA)
//
//console.log(frutas);
//console.log("Hello")