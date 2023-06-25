
function suma() {
    //La variable a se encarga de capturar el primer valor
    //La variable b se encarga de capturar el segundo valor
    //La variable s realiza la operacion de suma de "a" y "b"

    let a = 0;
    let b = 0;
    let s = 0;
    a = parseInt(prompt("Por favor, ingrese el primer valor: "));
    b = parseInt(prompt("Por favor, ingrese el segundo valor: "));
    s = a + b;
    alert("El resultado de la suma es " + s);
}
function opBasicas(){
    let a = 0;
    let b = 0;
    let s = 0;
    a = parseInt(prompt("Por favor, ingrese el primer valor: "));
    b = parseInt(prompt("Por favor, ingrese el segundo valor: "));
    s = a + b;
    alert("El resultado de la suma es " + s);
    s = a - b;
    alert("El resultado de la resta es " + s);
    s = a / b;
    alert("El resultado de la division es " + s);
    s = a * b;
    alert("El resultado de la multiplicacion es " + s);
}
function cuaNumero(){

    let a = 0;
    a = parseInt(prompt("Ingrese el valor: "));
    c = a * a;
    alert("El cuadrado del numero " + a + " es: " + c);    
}
function aTriangulo(){

    let b = 0;
    let a = 0;
    let area = 0;
    a = parseInt(prompt("Ingrese la altura del triangulo: "))
    b = parseInt(prompt("Ingrese la base del triangulo: "))
    area = (b * a) / 2;
    alert("El area del triangulo es " + area);
}
function InvCapital(){

    i = 0;
    n = 0;
    r = 0;

    i = parseInt(prompt("Ingrese la cantidad de dinero que desea invertir: "));
    n = parseInt(prompt("Ingrese la cantidad de años: "));

    r = i * 1.7 * (n/12);
    alert("La inversion mas la ganancia es: " + r);
    r = r + r;

}
function AñoNacimiento(){

    e = 0;
    fa = 0;
    r = 0;
    e = parseInt(prompt("Ingrese su edad"));
    fa = parseInt(prompt("Ingrese la fecha actual: "));
    r = fa - e ;
    alert(r);
} 

function mayorDos() {
var numero1 = parseFloat(prompt("Ingrese el primer número:"));
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));

if (isNaN(numero1) || isNaN(numero2)) {
  alert("Ingrese números válidos.");
} else if (numero1 > numero2) {
  alert("El número mayor es: " + numero1);
} else if (numero2 > numero1) {
  alert("El número mayor es: " + numero2);
} else {
  alert("Los números son iguales.");
}
}

function menorTres() {
    var numero1 = parseFloat(prompt("Ingrese el primer número:"));
    var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    var numero3 = parseFloat(prompt("Ingrese el tercer número:"));

    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
      alert("Ingrese números válidos.");
    } else if (numero1 <= numero2 && numero1 <= numero3) {
      alert("El número menor es: " + numero1);
    } else if (numero2 <= numero1 && numero2 <= numero3) {
      alert("El número menor es: " + numero2);
    } else {
        alert("El número menor es: " + numero3);
    }
}

function Descuento(){
    var precio = parseFloat(prompt("Ingrese el precio del producto:"));
    var descuento = parseFloat(prompt("Ingrese el porcentaje de descuento:"));
    
    if (isNaN(precio) || isNaN(descuento)) {
      alert("Ingrese valores numéricos válidos.");
    } else if (precio < 0 || descuento < 0) {
      alert("Ingrese valores positivos.");
    } else {
      var precioConDescuento = precio - (precio * (descuento / 100));
      alert("El precio con descuento es: $" + precioConDescuento.toFixed(2));
    }
}







