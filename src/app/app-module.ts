import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { App } from './app';
import { PrimerComponent } from './../components/primercomponent/primer.component';
import { HooksComponent } from './../components/hookscomponent/hooks.component';
import { DeportesComponent } from './../components/deportes.component';
import { FormsBindingComponent } from './../components/formsbindingcomponent/forms.binding.component';
import { SumarNumerosComponent } from './../components/sumarnumeroscomponent/sumar.numeros.component';
import { PruebaComponent } from './components/prueba-component/prueba-component';
import { TablaMultiplicarComponent } from './../components/tablamultiplicarcomponent/tabla.multiplicar.component';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HooksComponent,
    DeportesComponent,
    FormsBindingComponent,
    SumarNumerosComponent,
    PruebaComponent,
    TablaMultiplicarComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
