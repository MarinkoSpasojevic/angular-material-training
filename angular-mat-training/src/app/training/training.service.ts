import { Injectable } from '@angular/core';
import { Exercise } from '../_interfaces/excercise.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  public exerciseChanged = new Subject<Exercise>();

  public availableExercises: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
  ];
  
  private runningExercise: Exercise;
  private exercises: Exercise [] = [];

  constructor() { }

  public getAvailableExercises = () => {
    return this.availableExercises.slice();
  }

  public  startExercise = (selectedId: string) => {
    this.runningExercise = this.availableExercises.find(x => x.id === selectedId);
    this.exerciseChanged.next({...this.runningExercise});
  }

  public completeExercise = () => {
    this.exercises.push({ ...this.runningExercise, date: new Date(), state: 'completed' });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  public cancelExercise = (progress: number) => {
    this.exercises.push({
       ...this.runningExercise, 
       date: new Date(),
       state: 'cancelled', 
       duration: this.runningExercise.duration * (progress/100) ,
       calories: this.runningExercise.calories * (progress / 100)
      });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  public getRunningExercise = () => {
    return { ...this.runningExercise };
  }

  public getFinishedExercises = () => {
    return this.exercises.slice();
  }
}
