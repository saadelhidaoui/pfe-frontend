import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import {MissionsComponent} from '../../missions/missions.component';
import {ProjetsComponent} from '../../projets/projets.component';
import {ReclamationsComponent} from '../../reclamations/reclamations.component';
import {ContactsComponent} from '../../contacts/contacts.component';
import {RendezVousComponent} from '../../rendez-vous/rendez-vous.component';
import {TachesComponent} from '../../taches/taches.component';
import {ArriveeComponent} from '../../arrivee/arrivee.component';
import {DepartComponent} from '../../depart/depart.component';
import {AdherentsComponent} from '../../adherents/adherents.component';
import {ListePrincipaleComponent} from '../../liste-principale/liste-principale.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'liste-arrivee',     component: ArriveeComponent },
    { path: 'liste-depart',     component: DepartComponent },
    { path: 'rendez-vous',          component: RendezVousComponent },
    { path: 'task',           component: TachesComponent },
    { path: 'adherents',  component: AdherentsComponent },
    { path: 'liste-principale',        component: ListePrincipaleComponent },
    { path: 'missions',        component: MissionsComponent },
    { path: 'projets',        component: ProjetsComponent },
    { path: 'reclamations',        component: ReclamationsComponent },
    { path: 'contacts',        component: ContactsComponent },
];
