import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { ListeClientsService } from 'app/service/liste-clients.service';
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

@Component({
  selector: 'app-list-clients',
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
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.scss'
})
export class ListClientsComponent {

  clientsList: any[];

  constructor(private clientsService: ListeClientsService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientsService.getAllCients()
      .subscribe(response => {
        this.clientsList = response.clients;
      }, error => {
        console.error('Failed to load clients:', error);
        // Handle the error based on your application's needs
      });
  }
  deleteClient(id: string) {
    this.clientsService.deleteClient(id).subscribe(
      (response) => {
        console.log('Client deleted successfully:', response);
        // Refresh the client list after deletion
        this.loadClients();
      },
      (error) => {
        console.error('Failed to delete client:', error);
        // Handle the error based on your application's needs
      }
    );
  }
  
}


