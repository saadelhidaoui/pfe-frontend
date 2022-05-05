import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-arrivee',
  templateUrl: './arrivee.component.html',
  styleUrls: ['./arrivee.component.scss']
})
export class ArriveeComponent implements OnInit {
  displayedColumns: string[] = ['aff', 'cin', 'Nom', 'PPR', 'DateArrivee', 'ville', 'type', 'Etat', 'ChargeCas', 'Importance', 'Reception', 'Notes', 'Resultat', 'Moderateur'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  constructor() {}



  ngOnInit(): void {
  }

  editArrivee(row: any) {
  }

  deleteArrivee(id: number) {
  }
}




