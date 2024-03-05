import { Delete, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Clients, ClientsDocument } from './clients.schema';
import { Model } from 'mongoose';

@Injectable()
export class ClientsService {



    constructor(@InjectModel(Clients.name) private clientModel: Model<ClientsDocument>){}

    async ajouterClient(nom: string, prenom: string, adresse: string, email: string, numrTel: number): Promise<Clients> {
        const createdClient = new this.clientModel({
            nom,
            prenom,
            adresse,
            email,
            numrTel,
        });
    
        return createdClient.save();
    }

    async getAllClients(): Promise<Clients[]> {
        const allClients = await this.clientModel.find().exec();
        return allClients;
      }

      async deleteClient(id: string): Promise<void> {
        await this.clientModel.findByIdAndDelete(id).exec();
      }

      async updateClients(id: string, updateData: Partial<Clients>): Promise<Clients> {
        const updatedClient = await this.clientModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
        if (!updatedClient) {
          // Handle the case where the client with the given ID was not found
          throw new Error('client not found');
        }
        return updatedClient;
      }

      async getClientsById(id: string): Promise<Clients> {
        return this.clientModel.findById(id).exec();
      }
      


    
}
