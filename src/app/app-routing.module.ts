import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicoComponent } from './pages/basico/basico.component';
import { DemoComponent } from './pages/demo/demo.component';
import { NgxComponent } from './pages/ngx/ngx.component';

const routes: Routes = [
  {path:'basico', component:BasicoComponent},
  {path:'demo', component: DemoComponent},
  {path: 'ngx', component: NgxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
