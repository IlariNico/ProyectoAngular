import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputecnoAboutComponent } from './computecno-about/computecno-about.component';
import { ComputecnoComprasComponent } from './computecno-compras/computecno-compras.component';

const routes: Routes = [
  {
    path:'componentes',
    component: ComputecnoComprasComponent
  },
  {
    path:'',
    redirectTo:'componentes',
    pathMatch:'full'
  },
  {
    path:'about',
    component:ComputecnoAboutComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
