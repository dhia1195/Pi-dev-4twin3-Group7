/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document, Types } from 'mongoose';
import { Clients } from 'src/clients/clients.schema';

export type VentesDocument = Ventes & Document;

@Schema()
export class Ventes {

  @Prop()
  id_produit: string;

  @Prop({ type: Date })
  dateV: Date;

  @Prop()
  statut_paiement: boolean;

 // @Prop() // Modification ici pour accepter uniquement l'ID du client
  @Prop({ type: Types.ObjectId, ref: 'Clients' })
  client: Clients;

}

export const VentesSchema = SchemaFactory.createForClass(Ventes);
