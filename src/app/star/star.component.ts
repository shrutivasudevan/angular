import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating:number;
  @Output() Increment:EventEmitter<Number> =
  new EventEmitter<Number>();
  starWidth: number;
  
  constructor() { }

  ngOnChanges() {
    this.starWidth = (this.rating / 10 + 1)*15;
  }
  onClick(): void {
    this.Increment.emit(1);
    console.log("click called in star cpomp")
  }
}
