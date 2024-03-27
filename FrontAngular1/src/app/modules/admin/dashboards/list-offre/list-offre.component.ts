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
import { OffreService } from 'app/service/offre.service';
import { ProduitService } from 'app/service/produit.service';
import { forkJoin } from 'rxjs';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

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

  offre: any;
  searchTerm: string = '';

  displayedColumns: string[] = ['reduction','name','condition', 'date debut','date fin','produits', 'action'];
  dataSource = [];

  constructor(private offreService: OffreService
    ,private produitService:ProduitService) {}

    ngOnInit(): void {
        this.offreService.getAllOffre().subscribe((data: any) => {
          this.offre = data;
          this.dataSource = data;
          
          // Array to hold all observables for fetching product details
          const observables: any[] = [];
      
          for (var d in this.offre) {
            if (this.offre.hasOwnProperty(d)) {
              const produitId = this.offre[d].produits[0];
              // Push each observable to the observables array
              observables.push(this.produitService.getProduitById(produitId));
            }
          }
      
          // Use forkJoin to wait for all observables to complete
          forkJoin(observables).subscribe((produitDataArray: any[]) => {
            let dataIndex = 0; // Index to track produitDataArray
            for (var d in this.offre) {
              if (this.offre.hasOwnProperty(d)) {
                // Assign produitData to produitsdetails property of this.offre[d]
                this.offre[d].produitsdetails = produitDataArray[dataIndex++];
              }
                         }
          });
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
  generatePDF() {
    // Check if dataSource is empty
    if (!this.dataSource || this.dataSource.length === 0) {
      console.error('No data to generate PDF');
      return;
    }
  
    const documentDefinition = {
      content: [
        { text: 'Liste des Offres', style: 'header' }, // Add a header for the PDF content
        {
          // Table containing the offre data
          table: {
            headerRows: 1,
            widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'], // Adjust column widths as needed
            body: [
              // Header row
              ['Reduction', 'Name', 'Condition', 'Date Début', 'Date Fin', 'Produits'],
              // Data rows
              ...this.dataSource.map(offre => [
                offre.reduction,
                offre.name,
                offre.condition,
                offre.dateD,
                offre.dateF,
                (offre.produitsdetails && offre.produitsdetails.nom) ? offre.produitsdetails.nom : '' // Check if produitsdetails exists and has nom
              ])
            ]
          }
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true
        }
      }
    };
  
    // Open the PDF in a new tab
    pdfMake.createPdf(documentDefinition).open();
  }
  
}    

