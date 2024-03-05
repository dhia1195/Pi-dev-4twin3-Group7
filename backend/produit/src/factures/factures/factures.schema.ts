import {  Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FactureDocument = Factures & Document;

export enum Facture_type{
    sales = 'sales',
    purchaes = 'purchases'
}


@Schema()
export class Factures {
  @Prop({ required: true })
  customerOrSupplierId: string;

  @Prop({ required: true })
  facture_date: Date;

  @Prop({ required: true })
  total_amount: number;

  @Prop({ type: String, enum: Object.values(Facture_type), required: true})
  facture_type: string;

  @Prop({ type: Object })
  facture_details: Ventes | Achats;
}



export const FactureSchema = SchemaFactory.createForClass(Factures);