import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  @Output() public trainingStart = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public onStartTraining = () => {
    this.trainingStart.emit();
  }
}
