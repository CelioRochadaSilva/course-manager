import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import {ReplacePipe} from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { Error404Component } from './erro-404/erro-404.component';
import { CourseInfoComponent } from './courses/course-info.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent, //ativando component e executando
    StarComponent, 
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseInfoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([ // rotas//
      {
        path:'courses' , component: CourseListComponent //pagina redirecionanto: 1ª rota
      }, 
      
      {
        path:'courses/info/:id', component:CourseInfoComponent 
        //redirecionanto: 2ª rota
      },
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
