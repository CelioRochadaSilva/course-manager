import { Component, OnInit } from "@angular/core";
import {Course} from './course';
import { CourseService } from "./course.service";

@Component({
        templateUrl:'./course-list.component.html' 
})
export class CourseListComponent implements OnInit{

    filteredCourses: Course[] = [];
    _courses: Course[] = [];

    _filterBy: string;
    
    constructor(private courseService: CourseService) { }
   
    retrieveAll(): void {
       this.retrieveAll();

    }

    ngOnInit():void{
        this.courseService.retrieveAll().subscribe({
            next: courses => {
             this._courses = courses;
             this.filteredCourses = this._courses;
            }, 
            error: err => console.log('Error', err) 
        })
        
     }

    set filter(value: string) { // solicitar e comparar
        this._filterBy = value; 
        
        this.filteredCourses = this._courses.filter((_course: Course) => _course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }
    get filter() {  // atualizar
        return this._filterBy;
    }

}