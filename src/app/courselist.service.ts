import { Injectable } from '@angular/core';
import {course} from './courses/course';
import {coursedata} from './courses/coursesdata';
@Injectable({
  providedIn: 'root'
})

export class CourselistService {
  getCourses():course[]{
    return coursedata;
  }
  constructor() { }
}
