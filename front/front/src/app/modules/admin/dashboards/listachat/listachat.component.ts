import { Component, NgModule, OnInit } from '@angular/core';
import { AchatService } from 'services/achat.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listachat',
  standalone: true,
  imports: [CommonModule,MatTableModule],
  templateUrl: './listachat.component.html',
  styleUrls: ['./listachat.component.scss']
})

export class ListachatComponent  {

  achatsList: any[];

  constructor(private service: AchatService , private router:Router) {}

  ngOnInit(): void {
    this.loadAchat();
  }

  loadAchat() {
    this.service.getAllAchats()
      .subscribe(response => {
        this.achatsList = response.achat;
      }, error => {
        console.error('Failed to load ventes:', error);
        // Handle the error based on your application's needs
      });
  }

  deleteAchat(id: string) {
    this.service.deleteAchat(id).subscribe(
      (response) => {
        console.log('Vente deleted successfully:', response);
        // Refresh the client list after deletion
        this.loadAchat();
      },
      (error) => {
        console.error('Failed to delete Vente:', error);
        // Handle the error based on your application's needs
      }
    );
    }
    updateAchat(achat: any) {

      console.log('Navigating to:', `/updateAchat/${achat._id}`);
      this.router.navigate(['dashboards/updateAchat', achat._id]);
    }
  
}
