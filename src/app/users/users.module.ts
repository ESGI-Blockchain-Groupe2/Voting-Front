import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectionListComponent } from './election-list/election-list.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    ElectionListComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    ElectionListComponent
  ]
})
export class UsersModule { }
