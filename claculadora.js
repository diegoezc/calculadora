const pantalla =document.querySelector(".input");
const botones= document.querySelectorAll(".btn");
const resultado = document.getElementById("resultado");
const borrar=document.getElementById("borrar")
let operacion = null;

botones.forEach(boton=>{
    if(boton.id!=="borrar"){
        boton.addEventListener("click", (e)=>{
            e.preventDefault()
            const botonApretado=boton.textContent;
            console.log(boton.className)
            if(botonApretado!='='){
                pantalla.value+= botonApretado
            }
            return
    
        })
    }
})

resultado.addEventListener("click", (evento)=>{
     evento.preventDefault()
     pantalla.value=eval(pantalla.value)
     
})

borrar.addEventListener("click", (evento)=>{
    evento.preventDefault();
    pantalla.value="";
})
