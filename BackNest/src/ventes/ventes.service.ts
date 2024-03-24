/* eslint-disable prettier/prettier */
import { Delete, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Ventes, VentesDocument } from './ventes.schema';
import { Date, Model } from 'mongoose';
import { Clients } from 'src/clients/clients.schema';

@Injectable()
export class VentesService {



    constructor(@InjectModel(Ventes.name) private venteModel: Model<VentesDocument>){}

    async ajouterVente(id_produit: string, dateV: Date, statut_paiement: boolean, client: Clients): Promise<Ventes> {
      const createdVente = new this.venteModel({
          id_produit,
          dateV,
          statut_paiement,
          client, 
          
      });
    
  
      return createdVente.save();
  }

    async getAllVentes(): Promise<Ventes[]> {
        const allClients = await this.venteModel.find().exec();
        return allClients;
      }
    async deleteVente(id: string): Promise<void> {
        await this.venteModel.findByIdAndDelete(id).exec();
      }
    
    async updateVente(id: string, updateData: Partial<Ventes>): Promise<Ventes> {
        const updatedVente = await this.venteModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
        if (!updatedVente) {
          // Handle the case where the sprint with the given ID was not found
          throw new Error('vente not found');
        }
        return updatedVente;
      }
      async getById(id: string): Promise<Ventes> {
        return this.venteModel.findById(id).exec();
      }


}