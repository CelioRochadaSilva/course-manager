import { RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from './course-info.component';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from '../pipe/replace.pipe';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../star/star.component';

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
        ReplacePipe, 
        StarComponent
               
    ], 
    
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path:'courses' , component: CourseListComponent //pagina redirecionanto: 1ª rota
              }, 
              
              {
                path:'courses/info/:id', component:CourseInfoComponent 
                //redirecionanto: 2ª rota
              }

        ])


    ]
})
export class CourseModule { 

}