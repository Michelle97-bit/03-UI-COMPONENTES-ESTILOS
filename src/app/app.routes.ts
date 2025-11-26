import { RouterModule, Routes } from '@angular/router';
import { EstilosPage } from './features/estilos-page/estilos-page';
import { SimpsonsPageComponent } from './features/simpsons-page/simpsons-page';
import { SimpsonDetailPageComponent } from './features/simpson-detail-page/simpson-detail-page';
import { NgModule } from '@angular/core';
import { DaisyuiPageComponent } from './features/daisyui-page/daisyui-page';

export const routes: Routes = [
 { path: '', component: DaisyuiPageComponent },
{
  path: 'simpson',
  component: SimpsonsPageComponent,
},
{
  path: 'simpsons/:id',
  component: SimpsonDetailPageComponent,
}
,
{
  path: 'estilo',
  component: EstilosPage,
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
