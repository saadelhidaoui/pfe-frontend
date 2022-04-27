import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatButtonToggleGroup} from '@angular/material/button-toggle';

@Component({
  selector: 'app-liste-principale',
  templateUrl: './liste-principale.component.html',
  styleUrls: ['./liste-principale.component.scss']
})
export class ListePrincipaleComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource!: MatTableDataSource<any>;
  tables = [0];
/*
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }*/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  constructor() {
    this.displayedColumns.length = 30;
    this.displayedColumns = ['Aff', 'Qualite', 'Nom', 'Prenom', 'NomPrenomAr', 'NomAr', 'PrenomAr', 'CINN', 'CIN', 'PPRR', 'PPR', 'Naissance', 'DateNaissance', 'Photo', 'CINNConj', 'CINConj', 'CINConj', 'NomAdherent', 'PrenomAdherent', 'CINNAdhe', 'CINAdhe', 'PprrAdhe', 'PprAdhe', 'VersoCarte', 'AFF1', 'AFF2', 'NVAL'];

  }

  /** Whether the button toggle group contains the id as an active value. */
  isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string) {
    return (buttonToggleGroup.value || []).indexOf(id) !== -1;
  }

  ngOnInit(): void {
  }
}

export interface PeriodicElement {
  Aff: string;
  Qualite: string;
  Nom: string;
  Prenom: string;

}
