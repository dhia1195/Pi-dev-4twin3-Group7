import {  Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Fournisseurs } from 'src/fournisseurs/fournisseurs.schema';

export type AchatDocument = Achats & Document;



@Schema()
export class Achats{
  

  @Prop()
  article: string;

  @Prop()
  quantity: number;

  
  @Prop()
  prix_unitaire: number;

  
  @Prop()
  montant_total: number;

  @Prop({ type: Date })
  date: Date;

  @Prop()
  paiement: string;

  
  @Prop()
  fournisseurId: string;
}



export const AchatSchema = SchemaFactory.createForClass(Achats);