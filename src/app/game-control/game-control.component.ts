import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timer;
  @Output() oddElements: Array<{}> = [];
  @Output() evenElements: Array<{}> = [];
  @Output('oddNumberEvent') oddEvent = new EventEmitter<{data: number}>();
  @Output('evenNumberEvent') evenEvent = new EventEmitter<{data: number}>();
  
  constructor() { }

  ngOnInit() {
    
  }

  onStart() {
    var count = 0;
    this.timer = setInterval(() => {
      if (count % 2 === 0){
       // this.evenElements.push({data: count});
       this.evenEvent.emit({data: count});
      } else {
        //this.oddElements.push({data: count});
        this.oddEvent.emit({data: count});
      }
      count++;
    }, 1000)
  }

  onStop() {
    clearInterval(this.timer);
  }

  

}
