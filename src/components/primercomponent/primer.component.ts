import { Component } from "@angular/core"; 
//SIEMPRE DEBEMOS DECLARAR EL CONTENIDO DEL COMPONENT 
@Component({ 
    //NOMBRE DEL COMPONENT EN LAS VISTAS 
    selector: "primer-component", 
    standalone: false, 
    //NO NECESITAMOS NI CODIGO HTML NI CSS DE FORMA OBLIGATORIA 
    template: ` 
    <h1>Soy un component nuevo en Angular!!!</h1>
    <h3 style="color: blue">Su nombre es {{nombre}}</h3>
    <h3 style="color: fuchsia">Estamos en el año {{year}}</h3>
    ` 
}) 
//CADA COMPONENT DEBE TENER UNA CLASE ASOCIADA EN SU TS 
//EL NOMBRE DE LA CLASE, CADA INICIAL EN MAYUSCULAS Y DEBEMOS INCLUIR ESTE  
//NOMBRE DENTRO DE MODULE PARA PODER UTILIZARLO 
export class PrimerComponent { 
    //AQUI ES DONDE SE DECLARAN LAS VARIABLES DEL COMPONENT JUNTO A SU  
    //TIPO DE DATO 
    public nombre: string; 
    public year: number; 
    //EN ANGULAR, AL IGUAL QUE EN REACT, TENEMOS UN CONSTRUCTOR 
    //ES DONDE DEBEMOS INICIALIZAR LOS OBJETOS DE LA CLASE. 
    constructor() { 
        //PARA ACCEDER A LOS OBJETOS DE LA CLASE, SE UTILIZA LA  
        //PALABRA CLAVE this 
        this.nombre = "Alumno"; 
        this.year = 2026; 
    } 
}