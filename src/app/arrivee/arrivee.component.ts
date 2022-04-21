import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-arrivee',
  templateUrl: './arrivee.component.html',
  styleUrls: ['./arrivee.component.scss']
})
export class ArriveeComponent implements OnInit {
  // displayedColumns: string[] = ['id', 'CIN', 'Nom & Prénom', 'PPR', 'DateArrivée', 'ville', 'type', 'Etat', 'ChargeCas', 'Importance', 'Reception', 'Notes', 'Résultat', 'Modérateur'];
  // dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}


  ngOnInit(): void {
  }
}




