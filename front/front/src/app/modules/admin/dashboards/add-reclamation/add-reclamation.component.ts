import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReclamationService } from 'services/reclamation.service';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'app-add-reclamation',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './add-reclamation.component.html',
    styleUrl: './add-reclamation.component.scss',
})
export class AddReclamationComponent {
    constructor(
        private reclamationservice: ReclamationService,
        private fb: FormBuilder
    ) {}
    reclamationForm: FormGroup;
    ajoutAvecSucces: boolean = false;

    ngOnInit(): void {
        this.reclamationForm = this.fb.group({
            title: ['', [Validators.minLength(3), Validators.required]],
            description: ['', [Validators.minLength(3), Validators.required]],
            date: ['', [Validators.minLength(3), Validators.required]],
        });
    }
    public addReclamation() {
        console.log(this.reclamationForm.controls);
        if (this.reclamationForm.valid) {
            this.reclamationservice
                .addReclamation(this.reclamationForm.value)
                .subscribe((data) => {
                    console.log(data);
                    this.ajoutAvecSucces = true;
                    this.reclamationForm.reset();
                });
        }
    }
}
