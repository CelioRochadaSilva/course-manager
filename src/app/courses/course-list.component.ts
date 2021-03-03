import { Component, OnInit } from "@angular/core";
import {Course} from './course';
@Component({
    selector:'app-course-list',
    templateUrl:'./course-list.component.html' 
})
export class CourseListComponent implements OnInit{
    courses: Course[] = [];
    ngOnInit(): void{
       this.courses = [
           {
        id: 1,
        name: 'Angular: Fomrs',
        imageUrl: '',
        price: 99.99,
        code: 'xp98834',
        duration: 120,
        rating: 5.4 ,
        releaseDate: 'Março , 01 de 2021'
           },
           {
            id: 2,
            name: 'Bootstrap: http',
            imageUrl: '',
            price: 69.79,
            code: 'ap18334',
            duration: 130,
            rating: 6.3,
            releaseDate: 'Março , 02 de 2021'
               }
               
       ];  // tarefa /p componenete
    }

}