import { MainPageComponent } from './Demo/main-page/main-page.component';
import { ObservablesComponent } from './Demo/observables/observables.component';
import { PromisesComponent } from './Demo/promises/promises.component';
import { ReactiveFormComponent } from './Demo/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './Demo/template-driven-form/template-driven-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'demo',
    pathMatch: 'full'
  },
  {
    path: 'demo',
    component: MainPageComponent,
  },
  {
    path: 'temp',
    component: TemplateDrivenFormComponent,
  },
  {
    path: 'reactive',
    component: ReactiveFormComponent,
  },
  {
    path: 'promises',
    component: PromisesComponent,
  },
  {
    path: 'observables',
    component: ObservablesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
