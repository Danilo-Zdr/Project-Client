import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScorelineRoutingModule } from './scoreline-routing.nodule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ScorelineComponent } from './view-scorelines/scoreline.component';
import { UpdateScorelineComponent } from './update-scoreline/update-scoreline.component';
import { CreateScorelineComponent } from './create-scoreline/create-scoreline.component';

@NgModule({
  imports: [
    CommonModule,
    ScorelineRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ScorelineComponent, UpdateScorelineComponent, CreateScorelineComponent]

})
export class ScorelineModule { }
