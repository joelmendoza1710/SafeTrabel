import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
  sitios: string;
}

/** Constants used to fill up our data base. */
const calificacion: string[] = [
  '5',
  '4',
  '3',
  '2',
  '1',
 
];
const comentario: string[] = [
  'bueno',
  'exelente',
  'malo ',
  'muy malo',
  
 
];
const sitios: string[] = [
  'mercado de bazurto',
  'centro',
  'pie de la popa ',
  'marbella',
  'playa blanca ',
  'boquilla',
  
 
]; 
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];


@Component({
  selector: 'app-visitante',
  templateUrl: './visitante.component.html',
  styleUrls: ['./visitante.component.css']
})
export class VisitanteComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'email', 'comentario','sitios', 'calificacion','editar','eliminar'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator: MatPaginator 
  @ViewChild(MatSort) sort: MatSort 

  constructor() {
     // crear 10 visitantes
     const users = Array.from({length: 10}, (_, k) => createNewUser(k + 1));

     // asigna los datos a la tabla 
     this.dataSource = new MatTableDataSource(users);
   }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    //filtrado de la tabla 
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
//paginador
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: comentario[Math.round(Math.random() * (comentario.length - 1))],
    name: name,
    progress:name+'@gmail.com',
    fruit: calificacion[Math.round(Math.random() * (calificacion.length - 1))],
    sitios: sitios[Math.round(Math.random() * (sitios.length - 1))]
  };

}
