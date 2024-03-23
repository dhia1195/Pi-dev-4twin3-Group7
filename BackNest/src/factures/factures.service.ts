/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { FactureDocument } from 'src/Factures/Factures.schema';
import { Factures } from './factures.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FacturesService {
  constructor(
    @InjectModel(Factures.name) private factureModel: Model<FactureDocument>,
  ) {}

  async ajouterVente(
    customerOrSupplierId: string,
    facture_date: Date,
    total_amount: number,
    facture_type: string,
  ): Promise<Factures> {
    const createdVente = new this.factureModel({
        customerOrSupplierId,
        facture_date,
        total_amount,
        facture_type, 
    });

    return createdVente.save();
  }

  async getAllFactures(): Promise<Factures[]> {
    const allFactures = await this.factureModel.find().exec();
    return allFactures;
  }
  async deleteFactures(id: string): Promise<void> {
    await this.factureModel.findByIdAndDelete(id).exec();
  }

  async updateFactures(
    id: string,
    updateData: Partial<Factures>,
  ): Promise<Factures> {
    const updateFactures = await this.factureModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
    if (!updateFactures) {
      // Handle the case where the sprint with the given ID was not found
      throw new Error('vente not found');
    }
    return updateFactures;
  }
  async getById(id: string): Promise<Factures> {
    return this.factureModel.findById(id).exec();
  }
}
