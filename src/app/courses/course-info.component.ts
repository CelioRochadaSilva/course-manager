import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl:'./course-info.component.html'
})
export class CourseInfoComponent implements OnInit{
    course:Course;
    constructor(private activatedRoute : ActivatedRoute , private courseService: CourseService) {}
    ngOnInit(): void{
     this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
         next: courso => this.course = courso,
         error: err => console.log('Error', err) 

     });
    }
    save(): void{
        this.courseService.save(this.course).subscribe({
            next: course => console.log('save with sucess' , course),
            error: err => console.log('Error', err) 
        });
    }
}