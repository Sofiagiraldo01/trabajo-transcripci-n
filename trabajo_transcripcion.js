let edad = 9;
edad >= 18 ? console.log("Es mayor de edad.."): console.log("Es menor de edad-.");

let numero = -3;
numero > 0 ? console.log("numero positivo") : console.log("numero negativo");


let ocupacionCancha = true;
let nombreCancha = "Bernabeu";

let mensaje = ocupacionCancha ? `la cancha llamada ${nombreCancha} esta ocupada"` :
       `la cancha llamada ${nombreCancha} esta disponible"` ;
       console.log(mensaje);
     
 const email = "arleth64@gmail.com";
 const contraseña = "1234" ;
 
 email == "arleth64@gmail.com" && contraseña == "1234" ?
    console.log(`señor usuario con correo ${email} Bienvenido al sistema`) :
    console.log(`El correo ${email} y la contraseña digitada es incorrecta`) ;


let colorSemaforo = "amarillo" ;
colorSemaforo == "verde"? console.log(`El semaforo esta en ${colorSemaforo} puede seguir`) :
    colorSemaforo == "rojo"? console.log(`EL semaforo esta en ${colorSemaforo} debe parar`) :
        colorSemaforo == "amarillo" ? console.log("aliste motores"):
            console.log(`muestra color ${colorSemaforo}, esta dañado`);

let temperatura = 40;
if(temperatura >= 40){
    console.log(`usted tiene fiebre, su temperatura es mayor a ${temperatura} grados`)

}
let tipoCliente = "normal";
if(tipoCliente == "normal"){
    console.log(`va a ser atendido en el nmodulo 1 por ser cliente ${tipoCliente} `);
}else if(tipoCliente == "preferencial"){
    console.log("esta habilitado los modulos 2 y 3 para su atención");
}else{
    console.log("usted no es cliente del banco, por fvaor dirijase al modulo 4");
}

let emailBaseDatos = "arleth64@gmail.com";
let claveBaseDatos = "1234*";
let emailIngresado = "arle@gmail.com";
let claveIngresada = "1234*";
let nombreUsuario = "Juan";

if(emailBaseDatos == emailIngresado && claveBaseDatos == claveIngresada){
console.log(`${nombreUsuario} bienvenido!, seleccione opciones del sistema`);
}else{
    console.log(`Acceso denegado..`);
}


let derecha = true;
let izquierda = false;
let arriba = false;
let abajo =false;

if(derecha){
    console.log("robot moviendose hacia la derecha");
}else if(izquierda){
    console.log("robot moviendose a la izquierda");
}else if(arriba){
    console.log("robot moviendose hacia arriba");
}else if(abajo){
    console.log("robot moviendose hacia abajo");
}else{
    console.log("movimiento extraño");
}

let encendido = true;
let velocidad = 32;

if(encendido){
    console.log(`su carro esta encendido`);
    if(velocidad == 0){
        console.log(`su carro freno`);
    }else if(velocidad > 0 && velocidad <= 100){
        console.log(`carro en marcha..`)
    }else{
        console.log(`evitese un accidente.. exceso de velocidad`)
    }
}else{
    console.log(`Encienda su vehiculo..`);
}

let dia = "miercoles";
let clase = "algoritmos";
if(dia == "miercoles"){
    console.log(`la clase de hoy es ${clase}`)
}

 



