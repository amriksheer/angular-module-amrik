import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';

@NgModule({
  imports: [SharedModule, PipesRoutingModule, ReactiveFormsModule],
  declarations: [PipesComponent]
})
export class PipesModule {}
