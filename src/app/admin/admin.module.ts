import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateElectionComponent } from './create-election/create-election.component';
import { ManageAdminComponent } from './manage-admin/manage-admin.component';



@NgModule({
  declarations: [CreateElectionComponent, ManageAdminComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
