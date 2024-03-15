import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeVentesService } from '../../../../../services/liste-ventes.service';

@Component({
  selector: 'app-liste-ventes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-ventes.component.html',
  styleUrl: './liste-ventes.component.scss'
})
export class ListeVentesComponent {

  ventesList: any[];

  constructor(private ventesService: ListeVentesService) {}

  ngOnInit(): void {
    this.loadVentes();
  }

  loadVentes() {
    this.ventesService.getAllVentes()
      .subscribe(response => {
        this.ventesList = response.ventes;
      }, error => {
        console.error('Failed to load ventes:', error);
        // Handle the error based on your application's needs
      });
  }

  deleteVente(id: string) {
    this.ventesService.deleteVente(id).subscribe(
      (response) => {
        console.log('Vente deleted successfully:', response);
        // Refresh the client list after deletion
        this.loadVentes();
      },
      (error) => {
        console.error('Failed to delete Vente:', error);
        // Handle the error based on your application's needs
      }
    );

}
}
