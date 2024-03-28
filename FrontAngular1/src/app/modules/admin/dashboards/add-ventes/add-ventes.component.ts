import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ListeVentesService } from 'app/service/liste-ventes.service';

@Component({
  selector: 'app-add-ventes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-ventes.component.html',
  styleUrl: './add-ventes.component.scss'
})
export class AddVentesComponent {
  addVenteForm: FormGroup;
  ajoutAvecSucces: boolean = false;

  constructor(private ventesService: ListeVentesService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addVenteForm = this.fb.group({
      id_produit: ['', Validators.required],
      dateV: ['', Validators.required],
      statut_paiement: [false, Validators.required],
      clientId: ['', Validators.required], // Seul champ pour l'ID du client
    });
  }

  addVente() {
    if (this.addVenteForm.valid) {
      this.ventesService
          .ajouterVente(this.addVenteForm.value)
          .subscribe((data) => {
              console.log(data);
              this.ajoutAvecSucces = true;
              this.addVenteForm.reset();
          });
    }
  }
}
