let nombre =document.getElementById("nombre");
let apellido=document.getElementById("apellido");
let telefono=document.getElementById("telefono");
let email=document.getElementById("email");
let comentario=document.getElementById("comentario");
let btnEnviar=document.getElementById("enviar");
let informacion= [];

btnEnviar.addEventListener ("click", (e)=>{
    e.preventDefault();
    informacion[0]= nombre.value
    informacion[1]=apellido.value
    informacion[2]=telefono.value
    informacion[3]=email.value
    informacion[4]=comentario.value

    console.log (`Su nombre es ${(informacion [0])}, su apellido es ${informacion[1]}, su telefono es ${informacion[2]}, su email: ${informacion[3]}, su comentario ${informacion[4]} `)
let blob= new Blob ([informacion], {type: "text/plain;charset=utf-8"});

saveAs (blob,"contacto.txt")
})

// const formulario= document.getElementById('miformulario');
// formulario.addEventListener ('boton',(Event) => {
    // Event.preventDefault();
    // const nombre=document.getElementById ('nombre').value;
    // const email= document.getElementById ('email').value;
    // console.log (`Nombre: ${nombre}, Email: ${email}`);
// })
