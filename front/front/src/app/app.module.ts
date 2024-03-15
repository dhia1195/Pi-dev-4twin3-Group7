import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ListachatComponent } from './modules/admin/dashboards/listachat/listachat.component';



@NgModule({
  imports: [

    FormsModule,
    HttpClientModule,
    CommonModule,
    NgModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserModule,
    ListachatComponent
    
  ],
  declarations: [
    AppComponent,
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
