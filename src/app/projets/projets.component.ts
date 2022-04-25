import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'ref', 'debut', 'desc', 'ville', 'etat', 'pv', 'action'];
  displayedColumns2: string[] = ['id', 'ref', 'lib', 'org', 'debut', 'action'];
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
  constructor() { }

  ngOnInit(): void {
  }

    editProject(row: any) {
    }

  deleteProject(id: number) {
  }

  deleteConvention(id: number) {
  }

  editConvention(row: any) {
  }
}
