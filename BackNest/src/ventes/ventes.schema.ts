/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, Document, Types } from 'mongoose';
import { Clients } from 'src/clients/clients.schema';
import { Produits } from 'src/produits/produits.schema';

export type VentesDocument = Ventes & Document;

@Schema()
export class Ventes {


  @Prop({ type: Date })
  dateV: Date;

  @Prop()
  statut_paiement: boolean;

  @Prop({ type: Types.ObjectId, ref: 'Clients' })
  client: Clients;
 
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Produits' }] })
  produits: Produits[];
}

export const VentesSchema = SchemaFactory.createForClass(Ventes);
