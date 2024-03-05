import {  Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

export type VentesDocument = Ventes & Document;


  

@Schema()
export class Ventes{
  

  @Prop()
  produitV: string;

  @Prop({type:Date})
  dateV: Date;

  @Prop()
  statut_paiement: boolean;
  @Prop()
  id_client: string;
  

  
}



export const VentesSchema = SchemaFactory.createForClass(Ventes);