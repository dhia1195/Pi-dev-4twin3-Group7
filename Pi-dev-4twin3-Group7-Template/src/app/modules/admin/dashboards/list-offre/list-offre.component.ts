import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { OffreService } from 'services/offre.service';

@Component({
  selector: 'app-list-offre',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    NgApexchartsModule,
    MatTableModule,
    MatSortModule,
    NgClass,
    MatProgressBarModule,
    CurrencyPipe,
    DatePipe,
    RouterLink,
    HttpClientModule,
],
  templateUrl: './list-offre.component.html',
  styleUrl: './list-offre.component.scss'
})
export class ListOffreComponent {

  reclamation: any;
  searchTerm: string = '';

  displayedColumns: string[] = ['title', 'description', 'date debut','date fin', 'action'];
  dataSource = [];

  constructor(private offreService: OffreService) {}

  ngOnInit(): void {
      this.offreService.getAllOffre().subscribe((data: any) => {
          this.reclamation = data;
          this.dataSource=data;
          console.log(data);
      });
  }
  deleteOffre(offre: any) {
      console.log("Avant suppression - ID de la offre :", offre._id);
      
      const confirmation = window.confirm(
          "Êtes-vous sûr de vouloir supprimer cette offre ?"
      );
  
      if (confirmation) {
          // Call your service method to delete the reclamation
          this.offreService.deleteOffre(offre._id).subscribe(() => {
              // After deletion, update the data source to reflect the changes
              this.dataSource = this.dataSource.filter(item => item._id !== offre._id);
              console.log("Offre supprimée avec succès.");
          }, error => {
              console.error("Erreur lors de la suppression de la offre :", error);
          });
      }
  }
}    

