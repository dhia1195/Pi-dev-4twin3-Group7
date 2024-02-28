import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReclamationService } from 'services/reclamation.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApexOptions, NgApexchartsModule } from 'ng-apexcharts';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
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
    ],
})
export class ListReclamationComponent implements OnInit {
    reclamation: any;
    searchTerm: string = '';

    displayedColumns: string[] = ['title', 'description', 'date'];
    dataSource = [];

    constructor(private reclamationService: ReclamationService) {}

    ngOnInit(): void {
        this.reclamationService.getAllReclamation().subscribe((data: any) => {
            this.reclamation = data;
            this.dataSource=data;
            console.log(data);
        });
    }
}
