import { Injectable } from '@angular/core';
//import {course} from './courses/course';
//import {coursedata} from './courses/coursesdata';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { course } from './courses/course';
@Injectable({
  providedIn: 'root'
})

export class CourselistService {
  private url = '/src/course/coursedata.json';

  getCourses():Observable<course[]>{
    return this.http.get<course[]>(this.url).pipe(
      tap(data => console.log(JSON.stringify(data)))
    );
  }
  constructor(private http:HttpClient) { }
}
