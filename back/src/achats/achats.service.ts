import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AchatDocument, Achats } from './achats.schema';
import { Model } from 'mongoose';
import { Fournisseurs } from 'src/fournisseurs/fournisseurs.schema';




@Injectable()
export class AchatService {
    constructor(@InjectModel(Achats.name) private AchatModel: Model<AchatDocument>){}

    async ajouterAchat(article: string, quantity: number, prix_unitaire: number, date: Date, paiement: string,fournisseurId:string): Promise<Achats> {
        // Calculer le montant total
        const montant_total = quantity * prix_unitaire;
    
        // Créer un nouvel achat avec le montant total calculé
        const createdAchat = new this.AchatModel({
          article,
          quantity,
          prix_unitaire,
          montant_total,
          date,
          paiement,
          fournisseurId
        });
    
        // Sauvegarder et retourner l'achat créé
        return createdAchat.save();
      }
    
      async getAllAchats(): Promise<Achats[]> {
        const allFournisseurs = await this.AchatModel.find().exec();
        return allFournisseurs;
      }

      async updateAchat(id: string, updateData: Partial<Achats>): Promise<Achats> {
        // Vérifier si les données à mettre à jour incluent quantity ou prix_unitaire
        if (updateData.quantity !== undefined || updateData.prix_unitaire !== undefined) {
            // Récupérer l'achat existant pour obtenir les valeurs actuelles de quantity et prix_unitaire
            const existingAchat = await this.AchatModel.findById(id).exec();
    
            // Si l'achat n'existe pas, lancez une erreur
            if (!existingAchat) {
                throw new Error('Achat not found');
            }
    
            // Recalculer le montant total si la quantité ou le prix unitaire est modifié
            const newQuantity = updateData.quantity !== undefined ? updateData.quantity : existingAchat.quantity;
            const newPrixUnitaire = updateData.prix_unitaire !== undefined ? updateData.prix_unitaire : existingAchat.prix_unitaire;
            const montant_total = newQuantity * newPrixUnitaire;
    
            // Mettre à jour les données avec le nouveau montant total
            updateData.montant_total = montant_total;
        }
    
        // Mettre à jour l'achat avec les données mises à jour
        const updatedAchat = await this.AchatModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
    
        // Si l'achat n'est pas trouvé, lancer une erreur
        if (!updatedAchat) {
            throw new Error('Achat not found');
        }
    
        return updatedAchat;
    }

    async deleteAchat(id: string): Promise<void> {
        await this.AchatModel.findByIdAndDelete(id).exec();
      }

    async getAchatById(id: string): Promise<Achats> {
        return this.AchatModel.findById(id).exec();
      }
    }
