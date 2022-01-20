import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './Demo/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './Demo/reactive-form/reactive-form.component';
import { PromisesComponent } from './Demo/promises/promises.component';
import { ObservablesComponent } from './Demo/observables/observables.component';
import { MainPageComponent } from './Demo/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    PromisesComponent,
    ObservablesComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
