//condicional para determinar si el usuario o contraseÃ±a coinciden. 
function login (form) {
    if (form.u.value == "hernan") {
        if (form.c.value == "1234567") {
            location="pages/cuenta.html"
        } else{
            alert ("error de password")
        }
        
    } else {
        alert ("error de usuario") 
    }
    
}


//funcion para trasferir de cuenta primaria a secundaria.
function formula() {
    let cantidadtotal = parseInt(document.getElementById("cantidad").value);
    let cantidad1 = parseInt(document.getElementById("c1").value);
    let cantidad2 = parseInt(document.getElementById("c2").value);
    if(cantidad1 >= cantidadtotal){
        document.getElementById("c1").value = (cantidad1 - cantidadtotal)
        document.getElementById("c2").value = (cantidad2 + cantidadtotal)
    }else{
        alert("saldo insuficiente")
    }
}
//funcion para transferir de cuenta secundaria a la primaria.
function formula2() {
    let cantidadtotal = parseInt(document.getElementById("cantidad").value);
    let cantidad1 = parseInt(document.getElementById("c1").value);
    let cantidad2 = parseInt(document.getElementById("c2").value);
    if (cantidad2 >= cantidadtotal) {
        document.getElementById("c1").value = (cantidad1 + cantidadtotal)
        document.getElementById("c2").value = (cantidad2 - cantidadtotal)    
    }else{
        alert("saldo insuficiente")
    }
}
//funcion para depositar a cuenta primaria.
function formula3() {
    let cantidadtotal = parseInt(document.getElementById("cantidad").value);
    let cantidad1 = parseInt(document.getElementById("c1").value);
    let cantidad2 = parseInt(document.getElementById("c2").value);
    document.getElementById("c1").value = (cantidad1 + cantidadtotal) 
}
//funcion para depositar a cuenta secundaria.
function formula4() {
    let cantidadtotal = parseInt(document.getElementById("cantidad").value);
    let cantidad1 = parseInt(document.getElementById("c1").value);
    let cantidad2 = parseInt(document.getElementById("c2").value);
    document.getElementById("c2").value = (cantidad2 + cantidadtotal) 
}
//funcion para retirar de cuenta primaria.
function formula5() {
    let cantidadtotal = parseInt(document.getElementById("cantidad").value);
    let cantidad1 = parseInt(document.getElementById("c1").value);
    let cantidad2 = parseInt(document.getElementById("c2").value);
    document.getElementById("c1").value = (cantidad1 - cantidadtotal) 
}
//funcion para retirar de cuenta secundaria.
function formula6() {
    let cantidadtotal = parseInt(document.getElementById("cantidad").value);
    let cantidad1 = parseInt(document.getElementById("c1").value);
    let cantidad2 = parseInt(document.getElementById("c2").value);
    document.getElementById("c2").value = (cantidad2 - cantidadtotal) 
}