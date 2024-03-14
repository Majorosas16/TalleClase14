const fibonacci=[1,1,2,3,5,8,13,21];
const texto="";

const MenorArreglos = (arreglonuevo) =>{
    const enviar=[];

    for (let i=0;i<fibonacci.length;i++){
        if (fibonacci[i]<8){
            enviar.push(fibonacci[i]);
        }
    }
    return enviar.length;
}

const MayorArreglos = (arreglonuevo) =>{
    const enviar=[];

    for (let i=0;i<fibonacci.length;i++){
        if (fibonacci[i]>=8){
            enviar.push(fibonacci[i]);
        }
    }
    return enviar.length;
}

const Elementos = (arreglonuevo) =>{
    return numeroElementos =fibonacci.length
} 

const arreglo1 = MenorArreglos(fibonacci);
const arreglo2 = MayorArreglos(fibonacci);
const elementos = Elementos(fibonacci);


const arreglo = document.getElementById("Arreglo");
const mayores = document.getElementById("mayores8");
const menores = document.getElementById("menores8");
const total = document.getElementById("total");

arreglo.textContent= `Del arreglo ${fibonacci}`;
mayores.textContent= `Existen ${arreglo1} números menores que 8`;
menores.textContent= `Existen ${arreglo1} números mayores o iguales que 8`;
total.textContent= `Y, en total, hay ${elementos} elementos en el arreglo`;

arreglo.classList.add("parrafo--verde");
mayores.classList.add("parrafo--azul");
menores.classList.add("parrafo--azul");
total.classList.add("parrafo--azul");
arreglo.classList.add("parrafo--titulo");