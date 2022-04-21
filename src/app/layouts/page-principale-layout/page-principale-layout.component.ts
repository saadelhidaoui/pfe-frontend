import { Component, OnInit } from '@angular/core';
import {filter, Subscription} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-page-principale-layout',
  templateUrl: './page-principale-layout.component.html',
  styleUrls: ['./page-principale-layout.component.scss']
})
export class PagePrincipaleLayoutComponent implements OnInit {
  private _router: Subscription;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

}
