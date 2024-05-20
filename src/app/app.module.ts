import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicoComponent } from './pages/basico/basico.component';
import { DemoComponent } from './pages/demo/demo.component';
import { NgxComponent } from './pages/ngx/ngx.component';
import { ToastrCustomModule } from './modules/toastr-custom/toastr-custom.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BasicoComponent,
    DemoComponent,
    NgxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrCustomModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
