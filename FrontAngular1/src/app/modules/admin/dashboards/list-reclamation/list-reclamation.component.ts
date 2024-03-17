import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import {  MatTableModule } from '@angular/material/table';
import {  NgApexchartsModule } from 'ng-apexcharts';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReclamationService } from 'app/service/reclamation.service';
@Component({
    selector: 'app-list-reclamation',
    standalone: true,
    templateUrl: './list-reclamation.component.html',
    styleUrl: './list-reclamation.component.scss',
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
})
export class ListReclamationComponent implements OnInit {
    reclamation: any;
    searchTerm: string = '';

    displayedColumns: string[] = ['title', 'description', 'date', 'action'];
    dataSource = [];

    constructor(private reclamationService: ReclamationService) {}

    ngOnInit(): void {
        this.reclamationService.getAllReclamation().subscribe((data: any) => {
            this.reclamation = data;
            this.dataSource=data;
            console.log(data);
        });
    }
    deleteReclamation(reclamation: any) {
        console.log("Avant suppression - ID de la réclamation :", reclamation._id);
        
        const confirmation = window.confirm(
            "Êtes-vous sûr de vouloir supprimer cette réclamation ?"
        );
    
        if (confirmation) {
            // Call your service method to delete the reclamation
            this.reclamationService.deleteReclamation(reclamation._id).subscribe(() => {
                // After deletion, update the data source to reflect the changes
                this.dataSource = this.dataSource.filter(item => item._id !== reclamation._id);
                console.log("Réclamation supprimée avec succès.");
            }, error => {
                console.error("Erreur lors de la suppression de la réclamation :", error);
            });
        }
    }
}    
