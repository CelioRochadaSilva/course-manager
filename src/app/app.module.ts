import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import {ReplacePipe} from './pipe/replace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent, //ativando component e executando
    StarComponent, 
    ReplacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
