import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [

    FormsModule,
    HttpClientModule,
    CommonModule,
    NgModule,
    RouterModule,
    FormGroup
  ],
  declarations: [
    AppComponent,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
