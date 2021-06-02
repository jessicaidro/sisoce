import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OsCreateComponent } from './components/os/os-create/os-create.component';
import { LoginComponent } from './components/login/login.component';
import { ModeloCreateComponent } from './modelo/modelo-create/modelo-create.component';
import { MarcaCreateComponent } from './marca/marca-create/marca-create.component';

@NgModule({
  declarations: [
    AppComponent,
    OsCreateComponent,
    LoginComponent,
    ModeloCreateComponent,
    MarcaCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
