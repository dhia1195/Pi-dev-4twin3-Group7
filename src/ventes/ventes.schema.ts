/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

export type VentesDocument = Ventes & Document;

@Schema()
export class Ventes {

  @Prop()
  id_produit: string;

  @Prop({ type: Date })
  dateV: Date;

  @Prop()
  statut_paiement: boolean;

  @Prop() // Modification ici pour accepter uniquement l'ID du client
  clientId: string;

}

export const VentesSchema = SchemaFactory.createForClass(Ventes);
