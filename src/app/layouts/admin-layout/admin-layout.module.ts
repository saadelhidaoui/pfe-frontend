import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {ListePrincipaleComponent} from '../../liste-principale/liste-principale.component';
import {DepartComponent} from '../../depart/depart.component';
import {ArriveeComponent} from '../../arrivee/arrivee.component';
import {AdherentsComponent} from '../../adherents/adherents.component';
import {TachesComponent} from '../../taches/taches.component';
import {RendezVousComponent} from '../../rendez-vous/rendez-vous.component';
import {MissionsComponent} from '../../missions/missions.component';
import {ProjetsComponent} from '../../projets/projets.component';
import {ReclamationsComponent} from '../../reclamations/reclamations.component';
import {ContactsComponent} from '../../contacts/contacts.component';
import {PagePrincipaleComponent} from '../../page-principale/page-principale.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatIconModule,
        MatPaginatorModule,
        MatTableModule,
    ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
      ListePrincipaleComponent,
      DepartComponent,
      ArriveeComponent,
      AdherentsComponent,
      TachesComponent,
      RendezVousComponent,
      MissionsComponent,
      ProjetsComponent,
      ReclamationsComponent,
      ContactsComponent,

  ]
})

export class AdminLayoutModule {}
