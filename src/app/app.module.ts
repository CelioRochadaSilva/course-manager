import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import {ReplacePipe} from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './erro-404/erro-404.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent, //ativando component e executando
    StarComponent, 
    ReplacePipe,
    NavBarComponent,
    Error404Component

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([ // rotas//
      {
        path:'' , redirectTo:'courses' , pathMatch: 'full' // 1ª rota: base do app//
      }, 
      {
        path:'courses' , component: CourseListComponent //pagina redirecionanto: 2ª rota
      }, 
      {
        path:'**' , component: Error404Component

      }

    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
