import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  public currentTrainingValue: number = 0;
  public timer;

  constructor() { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.currentTrainingValue += 5;

      if(this.currentTrainingValue === 100){
        clearInterval(this.timer);
      }
    }, 1000)
  }

  public stopTraining = () => {
    clearInterval(this.timer);
  }

}
