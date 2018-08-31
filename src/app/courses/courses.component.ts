import { Component, OnInit } from '@angular/core';
import { course } from './course';
//import { coursedata } from './coursesdata';
import {CourselistService} from '../courselist.service';
import {StarComponent} from '../star/star.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses:course[];

  increment(i:number){
    console.log(this.courses[i]);
    this.courses[i].likes=this.courses[i].likes+1;    
  }
  /*onIncrement(i:number):void{
    this.courses[i].likes=this.courses[i].likes+1;    
  }*/
  constructor(private courselistservice:CourselistService) {
    this.courses=this.courselistservice.getCourses();
   }

  ngOnInit() {
    
  }
  onIncrement(i:number): void {
    console.log("click called in course");
    this.courses[i].likes=this.courses[i].likes+1;    
  }

}
