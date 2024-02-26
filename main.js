//Funciones
let nombre;
let edad;
let trabaja;
let allValue;
let sim=0;
let old =1;
let young=0;
let divDatos= document.createElement('div');
function rest(){
    allValue--;
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
function people(){
    let btn6= document.createElement('button');      
     btn6.className='boton';
     btn6.innerText='Siguente';
        
     if(allValue>=1){
        cu3.innerHTML=('');
        let txtnom=document.createElement('p')
        txtnom.className='titulos';
        txtnom.innerText=('Ingrese el nombre (De una persona no ingresada)');
        nombre=document.createElement('input');
        nombre.className='nombre';
        let txtedad=document.createElement('p')
        txtedad.className='titulos';
        txtedad.innerText=('Ingrese la edad de la persona');
        edad=document.createElement('input');
        edad.className='edad';
        
        let txttra=document.createElement('p')
        txttra.className='titulos';
        txttra.innerText=('¿La persona trabaja?');
        trabaja=document.createElement('input');
        trabaja.className='trabaja';
                                    
        cu.appendChild(txtnom);
        cu.appendChild(nombre);
        cu.appendChild(txtedad);
        cu.appendChild(edad);
        cu.appendChild(txttra);
        cu.appendChild(trabaja);
        cu.appendChild(btn6);

        allValue--;
        btn6.addEventListener('click', function(){
            
            let nomValue= nombre.value.toLowerCase();
            let edadValue= parseInt(edad.value);
            let traValue= trabaja.value.toLowerCase();
            const persona = new Persona(nomValue, edadValue, traValue);
            personas.push(persona);
            let datos=document.createElement('button');
            datos.innerText=('Ver Datos');
            datos.className='boton';
            mayor();
            cu.innerHTML='';
            Swal.fire({
                    title: 'Guardando Datos',
                    timer: 600,
                    position: 'bottom',
                    showConfirmButton: false,
                    color:'#0000000',  
                    width:'25em',
                    })
            cu3.appendChild(datos);
            datos.addEventListener('click', function(){
                cu3.innerHTML=('');
                divDatos.className='datos';
                let pearsons= document.createElement('h2');
                pearsons.innerText=('Personas');
                let ages=document.createElement('h2');
                ages.innerText=('Edades');
                let work=document.createElement('h2');
                work.innerText=('¿Trabajan?');
                let divTitulos=document.createElement('div');

                divTitulos.appendChild(pearsons);
                divTitulos.appendChild(ages);
                divTitulos.appendChild(work);

                divDatos.appendChild(divTitulos);

                for (let index = 0; index < personas.length; index++) {
                let div= document.createElement('div');
                div.className='datos'+[index];
                let peopleTd= document.createElement('p');
                peopleTd.innerText=(personas[index].nombre);
                let agesTd= document.createElement('p');
                agesTd.innerText=(personas[index].edad);
                let workTd= document.createElement('p');
                workTd.innerText=(personas[index].trabaja);
                div.appendChild(peopleTd);
                div.appendChild(agesTd);
                div.appendChild(workTd);
                divDatos.appendChild(div);
                 }
                cu3.appendChild(divDatos);
                
            })
            people();
        })
                                        
    }
    
    let trabajan= personas.map(personas => personas.trabaja);
    let todasEdades= personas.map(persona => persona.edad);

    
    const ageJSON= JSON.stringify(todasEdades);
    localStorage.setItem('edades',ageJSON);
    const jobJSON= JSON.stringify(trabajan)
    localStorage.setItem('trabajan', jobJSON);
    
    const perJSON= JSON.stringify(personas);
    localStorage.setItem('personas', perJSON);
    
    
}
//Array
const personas=[];


//valores al inicio
let cuadrado = document.getElementById('cuadrado');
let cu= document.getElementById('cuadrado2');
let cu3= document.getElementById('cuadrado3');

//inputs
let txtuser= document.createElement('p');
txtuser.innerText='Ingrese su nombre';
txtuser.className='titulos';
let user = document.createElement('input');
let txtage= document.createElement('p');
txtage.innerText='Ingrese su edad';
txtage.className='titulos';
let age = document.createElement('input');
let txtCI= document.createElement('p');
txtCI.innerText='Ingrese su C.I';
txtCI.className='titulos';
let CI = document.createElement('input');


//boton

let btn= document.createElement('button');
btn.className='boton';
btn.innerText='Siguente';

//Colocamos en el cuadrado
cuadrado.appendChild(txtuser);
cuadrado.appendChild(user);
cuadrado.appendChild(txtage);
cuadrado.appendChild(age);
cuadrado.appendChild(txtCI);
cuadrado.appendChild(CI);
cuadrado.appendChild(btn);

let txtmenor=document.createElement('p');
txtmenor.innerText='La edad ingresada es valida';
txtmenor.className='titulos rojo';

let CiStorage = localStorage.getItem('CI');

let datos=document.createElement('button');
datos.innerText=('Ver Datos');
datos.className='boton';

btn.addEventListener('click', function(){
    let userValue = user.value.toLowerCase();
    let ageValue = parseInt(age.value);
    let CiValue = (CI.value);
    console.log(userValue);
    console.log(ageValue);
    console.log(CiValue);
    
    cuadrado.innerHTML=('');
   
    //Si la persona ya lo hizo(por cedula)
    if(CiValue===CiStorage){

        cu3.appendChild(datos);
       
        datos.addEventListener('click', function(){
            cu3.innerHTML=('');
            divDatos.className='datos';
            let pearsons= document.createElement('h2');
            pearsons.innerText=('Personas');
            let ages=document.createElement('h2');
            ages.innerText=('Edades');
            let work=document.createElement('h2');
            work.innerText=('¿Trabajan?');
            let divTitulos=document.createElement('div');
            

            divTitulos.appendChild(pearsons);
            divTitulos.appendChild(ages);
            divTitulos.appendChild(work);

            divDatos.appendChild(divTitulos);

            let perStotage=JSON.parse(localStorage.getItem('personas'));
            console.log(perStotage);
            for (let index = 0; index < perStotage.length; index++) {
            let div= document.createElement('div');
            div.className='datos'[index];
            let peopleTd= document.createElement('p');
            peopleTd.innerText=(perStotage[index].nombre);
            let agesTd= document.createElement('p');
            agesTd.innerText=(perStotage[index].edad);
            let workTd= document.createElement('p');
            workTd.innerText=(perStotage[index].trabaja);
            div.appendChild(peopleTd);
            div.appendChild(agesTd);
            div.appendChild(workTd);
            divDatos.appendChild(div);
             }
            cu3.appendChild(divDatos);
        })

    }else{
    
        //Si la persona no lo hizo
        let txtjob= document.createElement('p');
        txtjob.innerText='¿Usted trabaja?';
        txtjob.className='titulos';
        let job = document.createElement('input');

        let btn2= document.createElement('button');
        btn2.className='boton';
        btn2.innerText='Siguente';

        //Segundo boton
        
        cuadrado.appendChild(txtjob);
        cuadrado.appendChild(job);
        cuadrado.appendChild(btn2);

        btn2.addEventListener('click', function(){
            //Subimos el usuario    
            let jobValue = job.value.toLowerCase();
            const usuario= new Persona(userValue, ageValue, jobValue);
            personas.push(usuario);


            cuadrado.innerHTML=('');

            let txtSW= document.createElement('p');
            txtSW.className='titulos';
            txtSW.innerText='¿Quiere iniciar el censo?';
            let resp = document.createElement('input');
        
            //Tercer btn
            let btn3= document.createElement('button');
            btn3.className='boton';
            btn3.innerText='Siguente';
            cuadrado.appendChild(txtSW);
            cuadrado.appendChild(resp);
            cuadrado.appendChild(btn3);


            btn3.addEventListener('click', function(){
                let respValue =resp.value.toLowerCase();
                
                cuadrado.innerText=('');
                //Switch
                
                switch(respValue){
                    case 'si':
                        let txtdept= document.createElement('p');
                        txtdept.className='titulos';
                        txtdept.innerText=('¿En que departamento vive?');
                        let dept= document.createElement('input');

                        let txtlocal= document.createElement('p');
                        txtlocal.className='titulos';
                        txtlocal.innerText=('¿En que localidad vive?');
                        let local= document.createElement('input');

                        let btn4= document.createElement('button');
                        btn4.className='boton';
                        btn4.innerText='Siguente';
                        cuadrado.appendChild(txtdept);
                        cuadrado.appendChild(dept);
                        cuadrado.appendChild(txtlocal);
                        cuadrado.appendChild(local);
                        cuadrado.appendChild(btn4);

                        btn4.addEventListener('click', function(){
                                let deptValue= dept.value.toLowerCase();
                                let localValue= local.value.toLowerCase();

                                cuadrado.innerText=('');
                                //Cantidad de personas

                                let txtall=document.createElement('p');
                                txtall.className='titulos';
                                txtall.innerText='¿Cuantas personas viven su hogar?(Sin incluir usted)';
                                let all = document.createElement('input');

                                let btn5= document.createElement('button');
                                btn5.className='boton';
                                btn5.innerText='Siguente';

                                cuadrado.appendChild(txtall);
                                cuadrado.appendChild(all);
                                cuadrado.appendChild(btn5);

                                

                                btn5.addEventListener('click', function(){
                                    allValue= parseInt(all.value);
                                    localStorage.setItem('todos', allValue);
                                    cuadrado.innerText=('');

                                    
                                        people();
                                        
                                    all=sim;
                                    
                                    datos.addEventListener('click', function(){
                                        cu3.innerHTML=('');
                                        for (let index = 0; index < personas.length; index++) {
                                        let peopleTd= document.createElement('p');
                                        peopleTd.innerText=(personas[index].nombre);
                                        let agesTd= document.createElement('p');
                                        agesTd.innerText=(personas[index].edad);
                                        let workTd= document.createElement('p');
                                        workTd.innerText=(personas[index].trabaja);
                                        divDatos.appendChild(peopleTd);
                                        divDatos.appendChild(agesTd);
                                        divDatos.appendChild(workTd);
                                         }
                                        cu3.appendChild(divDatos);
                                    })
                                
                                    
                                })
                                
                                const userJSON= JSON.stringify(usuario);
                                localStorage.setItem('CI',CiValue);
                                localStorage.setItem('dept',deptValue);
                                localStorage.setItem('local',localValue);
                                localStorage.setItem('user', userJSON);

                                
                                
                                

                            })
                        break;
                    
                        default:
                            let salir=document.createElement('h2')
                            salir.innerText='Puede cerrar la pagina';
                            cuadrado.appendChild(salir);
                    }

            })
        })
    }
})
