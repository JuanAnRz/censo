//Funciones

let all;
let sim;
let nombre;
let trabaja;
let edad;
let old =1;
let young=0;

function rest(){
    all--;
}

function sum(){
    sim++;
}
function mayor(){
        if(edad>=18){
            old++;
        }else{
            young++;
        }
}

class Persona{
    constructor(nombre, edad, trabaja){
    this.nombre=nombre;
    this.edad=edad;
    this.trabaja= trabaja;
    }
}

//Array
const personas=[];

const nombres=[];

//valores al inicio
let cuadrado = document.getElementById('cuadrado');
console.log(cuadrado);

//inputs
let txtuser= document.createElement('p');
txtuser.innerText='Ingrese su nombre';
txtuser.className='titulos';
let user = document.createElement('input');
user.id='user';
let txtage= document.createElement('p');
txtage.innerText='Ingrese su edad';
txtage.className='titulos';
let age = document.createElement('input');
age.id='age';
let txtCI= document.createElement('p');
txtCI.innerText='Ingrese su C.I';
txtCI.className='titulos';
let CI = document.createElement('input');
CI.id='CI';

//boton

let btn= document.createElement('button');
btn.id='boton';
btn.innerText='Siguente';

//Colocamos en el cuadrado
cuadrado.appendChild(txtuser);
cuadrado.appendChild(user);
cuadrado.appendChild(txtage);
cuadrado.appendChild(age);
cuadrado.appendChild(txtCI);
cuadrado.appendChild(CI);
cuadrado.appendChild(btn);


btn.addEventListener('click', function(){
    let userValue = user.value.toLowerCase();
    let ageValue = parseInt(age.value);
    let CiValue = parseInt(CI.value);
    console.log(userValue);
    console.log(ageValue);
    console.log(CiValue);
    }
)
/*//Inicio del censo
let user = prompt("Ingrese su nombre").toLowerCase();
let age= parseInt(prompt(`Ingrese su edad`));

while(age<18){
    alert(`Es una edad no valida para realizar el censo`);
    age=parseInt(prompt(`Ingrese una edad valida pra realizar el censo`));
}
let job=prompt('¿Usted trabaja?').toLowerCase();
const usuario= new Persona(user, age, job);
personas.push(usuario);
nombres.push(user);

//Switch
let resp =prompt(`Hola ${user}, ¿Quieres empezar con el censo?`).toLowerCase();
switch (resp){

//En caso de querer hacer el censo
case 'si':
alert(`Comencemos`);
    
//Preguntas
let dept= prompt(`¿En que departamento vive?`);
let local= prompt(`¿En que localidad vive?`);
all= Number(prompt(`${user} ¿Cuántas personas viven en su casa? (Sin ser usted)`));
sim=0;

//Nombres (No quedan guardados)

if(all>=1){
    while(all>0){
        nombre=prompt("Ingrese el nombre de una persona");
        edad=Number(prompt("Ingrese la edad de la persona"));
        trabaja=prompt("¿La persona trabaja?");
        nombre=nombre.toLowerCase();
        trabaja=trabaja.toLowerCase();
        const persona= new Persona(nombre, edad, trabaja);
        personas.push(persona);
        nombres.push(nombre);
        rest();
        sum();
        mayor();
    }
}
console.log(personas);
all=sim;
let stringsNombres= nombres.join(' , ');
let trabajan= personas.filter(personas => personas.trabaja==='si');
let todasEdades= personas.map(persona => persona.edad);
let stringsEdades= todasEdades.join(', ');
//Muestra de datos guardados

alert(`Tu eres ${user}`);
alert(`Tu tienes ${age} años de edad`);
alert(`Vives en el departamento de ${dept}`);
alert(`En la localidad de ${local}`);
if(all>0){
    alert(`En el hogar viven ${stringsNombres} además de usted `);
    console.log(stringsNombres);
}else{
    alert(`Y usted vive solo`);
}

alert(`Las edades ingresadas son: ${stringsEdades}`);

if (trabajan.length>1){
    alert(`En el hogar trabajan ${trabajan.length}`);
}else if(trabajan===1){
    alert(`En el hogar trabaja una sola persona`);
}else{
    alert(`En el hogar nadie trabaja`);
}

if (young>0){
    alert(`En el hogar viven ${young} menores de edad`);
    alert(`Y viven ${old} mayores de edad`);
}else{
    alert(`En el hogar no viven menores de edad`);
    alert(`Y viven ${old} mayores`);
}
let ask=prompt('¿Quieres ver la informacion sobre alguien?').toLowerCase();
while(ask==='si'){
    let quien=prompt('¿De quien?').toLowerCase();
    let posicion= nombres.indexOf(quien);
    let info= personas[posicion];
    alert(`La persona se llama ${info.nombre}, tiene ${info.edad} y ${info.trabaja} trabaja`);
    ask=prompt('¿Quieres ver la informacion sobre alguien?').toLowerCase();
}
alert('Gracias por realizar nuestro censo');
break;

//En el caso de no querer hacer el censo
default:
alert(`Puede cerrar la pagina, no se le haran preguntas`);
break;
}
*/