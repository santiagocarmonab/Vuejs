// var vs let vs const

var edad = 10
var edad = 20 //var permite redefinir
console.log(edad)

let numero=10
numero=15 //let permite modificar pero no redefinir
console.log(numero)

const valorConstante = 60
//inicialmente const no me permite hacer cambios

if (true){
    var edad = 25
    console.log("dentro del if la edad es: " + edad)
}

console.log("fuera del if la edad es: " + edad)
//al definir con var los cambios se ven reflejados globalmente

if (true){
    let numero = 72
    console.log("dentro del if numero es: " + numero)
}

console.log("fuera del if numero es: " + numero)
//al definir con let se pueden hacer cambios locales, por ejemplo en funciones

if (true){
    const valorConstante = 47
    console.log("dentro del if la constante es: " + valorConstante)
}

console.log("fuera del if la constante es: " + valorConstante)
//al definir con const se pueden hacer cambios locales
//el valor vive unicamente dentro del scope

//la diferencia entre const y let es que al definir con let si puede sobreescribirse

const arrayNumero=[10, 20, 30];
console.log(arrayNumero)
arrayNumero.push(40);
console.log(arrayNumero)
//a pesar de ser definido como const, por medio de push() es posible
//agregar mas elementos al array 

const persona = {
    nombre: 'John',
    edad: 19
}

console.log(persona)
persona.edad=22;
console.log(persona)
persona.pais='Wakanda';
console.log(persona)

/*persona es un objeto definido como constante, aun asi usando 
propiedades del objeto es posible realizar modificaciones adems
de la posibilidad de agregar nuevas propiedades

Si la constante es objeto o array puede modificarse dentro de sus propiedades*/

// :::::FUNCIONES:::::

function sumar (){
    console.log(10)
}

sumar()

const sumarDos = () => {
    console.log(20)
}

sumarDos()

//se ven 2 diferentes formas para definir una funcion
//a continuacion se muestran las funciones pasando parametros
function sumar_ (num){
    console.log(num)
}

sumar_(10)

const sumarDos_ = (num1, num2) => { //si es un solo parametro no se necesita ()
    return num1 + num2
}

sumVal = sumarDos_(20,30)
console.log(sumVal)

const sumarCompacta = (num1, num2) =>  num1 + num2 //forma compacta, omitiendo return y {}

valor=sumarCompacta(15, 18)
console.log(valor)

const sumaTres = (num = 0) =>{ //0 como valor por defecto si no se asigna nada
    console.log(num+3)
}

sumaTres()

//:::::: TEMPLATE STRING ::::::

const templateTest = (num1,num2) => (`el numero es: ${num1 + num2}`)

const result = templateTest(14, 34)
console.log(result)

// :::: OBJETOS ::::
const mascota = {
    nombre : 'firulais',
    edad: 10,
    vivo: true,
    razas : ['peludo', 'feo']
}
console.log(mascota) // con un . puedo acceder a propiedades del objeto
const {nombre} = mascota; //destructuring objects
console.log(nombre)

const web = {
    nombre: 'Atletico Nacional',
    links: {
        enlace: 'www.atlnacional.com.co'
    },
    redesSociales :{
        youtube :{
            nombre: 'nacionaloficial',
            enlace: 'https://www.youtube.com/user/nacionaloficial'
        },
        facebook: {
            nombre: 'Club Atletico Nacional Oficial',
            enlace: 'https://www.facebook.com/nacionaloficial/'
        }
    }
}
const {enlace} = web.redesSociales.youtube //destructuring objects
console.log(enlace)

// ::: FETCH :::

fetch ('https://pokeapi.co/api/v2/pokemon/')
.then( res => res.json())
.then( data => {
    console.log(data)
    data.results.forEach(element => {
        console.log(element.name)
    });
})
.catch(error => console.log(error))

// :: ASYNC AWAIT ::
const obtenerPokemones = async() => {
    try {
        const res = await fetch ('https://pokeapi.co/api/v2/pokemon/')
        const data = await res.json()
        console.log(data.results)
        const arrayNombres= data.results.map(poke => poke.name) // metodo map
        const nombreFiltrado = data.results.filter(poke => poke.name === 'bulbasaur') // filtrados
        console.log(nombreFiltrado) // aqui en el filtro puedo usar !== para depurar
    } catch (error) {
        console.log(error)
    }
}
obtenerPokemones()

//::: Filter ::::