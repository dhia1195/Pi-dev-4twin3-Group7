import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OffreService } from 'services/offre.service';

@Component({
  selector: 'app-add-offre',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
   templateUrl: './add-offre.component.html',
  styleUrl: './add-offre.component.scss'
})
export class AddOffreComponent {
  constructor(
    private offreService: OffreService,
    private fb: FormBuilder
) {}
offreForm: FormGroup;
ajoutAvecSucces: boolean = false;

ngOnInit(): void {
    this.offreForm = this.fb.group({
        title: ['', [Validators.minLength(3), Validators.required]],
        description: ['', [Validators.minLength(3), Validators.required]],
        dateD: ['', [Validators.minLength(3), Validators.required]],
        dateF: ['', [Validators.minLength(3), Validators.required]],

    });
}
public addOffre() {
    console.log(this.offreForm.controls);
    if (this.offreForm.valid) {
        this.offreService
            .addOffre(this.offreForm.value)
            .subscribe((data) => {
                console.log(data);
                this.ajoutAvecSucces = true;
                this.offreForm.reset();
            });
    }
}
}
