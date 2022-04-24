import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/liste-principale', title: 'Liste principale',  icon: 'person', class: '' },
    { path: '/liste-arrivee', title: 'Liste arrivée',  icon: 'supervisor_account', class: '' },
    { path: '/liste-depart', title: 'Liste départ',  icon: 'supervisor_account', class: '' },
    { path: '/rendez-vous', title: 'Rendez-vous',  icon: 'today', class: '' },
    { path: '/task', title: 'Tâches',  icon: 'task', class: '' },
    { path: '/adherents', title: 'adherents',  icon: 'person', class: '' },
    { path: '/missions', title: 'Missions',  icon: 'work', class: '' },
    { path: '/projets', title: 'Projets',  icon: 'tab', class: '' },

    { path: '/user-profile', title: 'Profil',  icon: 'person', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
