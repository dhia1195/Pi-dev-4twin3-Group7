import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeClientsService } from 'services/liste-clients.service';

@Component({
  selector: 'app-list-clients',
  standalone: true,
  imports: [CommonModule],
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


