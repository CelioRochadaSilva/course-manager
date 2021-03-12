import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';


import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { Error404Component } from './erro-404/erro-404.component';

import { CourseModule } from './courses/course.module';


@NgModule({
  declarations: [
    AppComponent,
     //ativando component e executando
     
    NavBarComponent,
    Error404Component
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([ // rotas//
      
      {
        path:'' , redirectTo:'courses' , pathMatch:'full' // 3ª rota: base do app//
      }, 
      
      {
        path:'**' , component: Error404Component // redirecionanto: 4ª rota erro//

      }

    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
