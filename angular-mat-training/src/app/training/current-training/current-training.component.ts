import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { ConfirmationDialogComponent } from 'src/app/shared/modals/confirmation-dialog/confirmation-dialog.component';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  public currentTrainingValue: number = 0;
  public timer;

  constructor(private dialog: MatDialog, private trainingService: TrainingService) { }

  ngOnInit() {
    this.startOrResumeTraining();
  }

  private startOrResumeTraining() {
    let step = this.trainingService.getRunningExercise().duration/100*1000;
    this.timer = setInterval(() => {
      this.currentTrainingValue += 1;

      if (this.currentTrainingValue === 100) {
        this.trainingService.completeExercise();
        clearInterval(this.timer);
      }
    }, step);
  }

  public stopTraining = () => {
    clearInterval(this.timer);
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: { progress: this.currentTrainingValue }
    });

    // we need to subscribe to our dialog to receive response from [mat-dialog-false]
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
         this.trainingService.cancelExercise(this.currentTrainingValue) 
        }
        else{
          this.startOrResumeTraining();
        }
      });
  }

}
