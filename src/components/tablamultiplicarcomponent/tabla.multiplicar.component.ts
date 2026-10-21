import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-tabla-multiplicar',
    standalone: false,
    templateUrl: './tabla.multiplicar.component.html'
})
export class TablaMultiplicarComponent { //
    @ViewChild("cajanumero") cajanumero!: ElementRef;
    public resultados: number[] = [];
    public operaciones: string[] = [];

    generarTabla(): void {
        let num = parseInt(this.cajanumero.nativeElement.value);
        this.resultados = [];
        this.operaciones = [];

        for (let i = 1; i <= 10; i++) {
            let resultado = num * i;
            this.resultados.push(resultado);
            this.operaciones.push(num + " * " + i + " = " + resultado);
        }
    }
}
