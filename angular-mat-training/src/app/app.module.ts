import { RoutingModule } from './routing/routing.module';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingsComponent } from './training/past-trainings/past-trainings.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { MAT_DATE_LOCALE } from '../../node_modules/@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [
    // {provide: MAT_DATE_LOCALE, useValue: 'en-GB'} to provide dd/MM/yyyy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
