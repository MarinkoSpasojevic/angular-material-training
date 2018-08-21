import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../../_interfaces/excercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  public exercises: Exercise[] = [];
  public selectedTraining: string;

  constructor(private trainingService: TrainingService) { }


  ngOnInit() {
    this.exercises = this.trainingService.getAvailableExercises();
  }

  public onStartTraining = () => {
    this.trainingService.startExercise(this.selectedTraining);
  }
}
