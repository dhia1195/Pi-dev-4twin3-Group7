import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OffreService } from 'app/service/offre.service';

@Component({
  selector: 'app-update-offre',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './update-offre.component.html',
  styleUrl: './update-offre.component.scss'
})
export class UpdateOffreComponent {
  offreForm: FormGroup;

    constructor(
        private offreService: OffreService,
        private fb: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}
    _id: string;
    modifierAvecSucces: boolean = false;

    ngOnInit(): void {
        this.offreForm = this.fb.group({
          reduction: new FormControl('', Validators.required),
          condition: new FormControl('', Validators.required),
          dateD: new FormControl('', Validators.required),
          dateF: new FormControl('', Validators.required),

        });
        this._id = this.activatedRoute.snapshot.params.id;
        console.log('this is id ', this._id);

        this.offreService
            .getOffreById(this._id)
            .subscribe((data) => {
                console.log('this is data ', data);
                this.offreForm.patchValue({ reduction: data['reduction'] });
                this.offreForm.patchValue({condition: data['condition']});
                this.offreForm.patchValue({ dateD: data['dateD'] });
                this.offreForm.patchValue({ dateF: data['dateF'] });


                console.log(
                    'offre form here ',
                    this.offreForm.value
                );
            });
    }

    updateOffre(): void {
        console.log(this.offreForm);

        if (this.offreForm.valid) {
          const offreData = this.offreForm.value;
          offreData._id = this._id; // Assuming _id is obtained and stored correctly

          this.offreService.updateOffre(this._id, offreData).subscribe(
            (data: any) => {
              console.log("Update success:", data);
              this.modifierAvecSucces = true;
              this.offreForm.reset();
              this.router.navigate(["dashboards/listoffre"]);
            },
            (error: any) => {
              console.error("Error updating offre:", error);
              // Handle error accordingly, e.g., show error message
            }
          );
        } else {
          // Form is invalid, handle accordingly
        }
    }
}
