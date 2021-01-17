import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateElectionComponent } from './admin/create-election/create-election.component';
import { ManageAdminComponent } from './admin/manage-admin/manage-admin.component';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ResultsComponent } from './core/results/results.component';
import { TableElectionComponent } from './core/table-election/table-election.component';
import { VoteComponent } from './core/vote/vote.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component: TableElectionComponent},
  {path:"admin-election", component: CreateElectionComponent},
  {path:"manage-admin", component: ManageAdminComponent},
  {path:"vote", component: VoteComponent},
  {path:"results", component: ResultsComponent},
  {path:"**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
