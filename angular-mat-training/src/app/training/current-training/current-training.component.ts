import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { ConfirmationDialogComponent } from 'src/app/shared/modals/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  public currentTrainingValue: number = 0;
  public timer;
  @Output() public trainingExit = new EventEmitter();

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.startOrResumeTraining();
  }

  private startOrResumeTraining() {
    this.timer = setInterval(() => {
      this.currentTrainingValue += 5;

      if (this.currentTrainingValue === 100) {
        clearInterval(this.timer);
      }
    }, 1000)
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
          this.trainingExit.emit();
        }
        else{
          this.startOrResumeTraining();
        }
      });
  }

}
