import { LOCALE_ID, NgModule } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import { CommonModule, registerLocaleData } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableElectionComponent } from './table-election/table-election.component';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    PageNotFoundComponent, 
    HeaderComponent, 
    FooterComponent,
    TableElectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageNotFoundComponent, 
    HeaderComponent, 
    FooterComponent,
    TableElectionComponent
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "fr-CA" }
  ]
})
export class CoreModule { }
