import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: Array<{}> = [];
  evenNumbers: Array<{}> = [];
  
  onOddEvent(oddEvent: {data: number}){    
    this.oddNumbers.push(oddEvent);
  }

  onEvenEvent(evenEvent: {data: number}){
    this.evenNumbers.push(evenEvent);
  }
}
