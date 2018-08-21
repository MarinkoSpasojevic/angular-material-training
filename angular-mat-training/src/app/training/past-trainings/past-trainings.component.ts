import { Exercise } from './../../_interfaces/excercise.model';
import { TrainingService } from './../training.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit {
  public displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  public dataSource = new MatTableDataSource<Exercise>();

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.dataSource.data = this.trainingService.getFinishedExercises();
  }

}
