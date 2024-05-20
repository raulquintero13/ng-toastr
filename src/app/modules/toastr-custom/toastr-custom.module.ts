import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrContainerComponent } from './components/toastr-container/toastr-container.component';



@NgModule({
  declarations: [
    ToastrContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToastrContainerComponent
  ]
})
export class ToastrCustomModule { }
