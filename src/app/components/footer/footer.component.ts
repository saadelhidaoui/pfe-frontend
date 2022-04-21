import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/page-principale', title: 'Page principale',  icon: '', class: '' },
  { path: '/contacts', title: 'Contacts',  icon: '', class: '' },
  { path: '/reclamations', title: 'Réclamations',  icon: '', class: '' },

];
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  test: Date = new Date();
  footerItems: RouteInfo[];
  constructor() { }

  ngOnInit() {
    this.footerItems = ROUTES.filter(footerItem => footerItem);
  }

}
