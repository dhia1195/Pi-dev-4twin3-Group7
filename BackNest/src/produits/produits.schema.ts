/* eslint-disable prettier/prettier */
import {  Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProduitDocument = Produits & Document;

export enum Categorie{
    service = 'service',
    produit = 'produit'
}


@Schema()
export class Produits{
  

  @Prop()
  nom: string;

  @Prop()
  prix: number;

  @Prop()
  quantite: string;
  
  @Prop({ type: String, enum: Object.values(Categorie)})
  categorie: Categorie;
  



}



export const ProduitSchema = SchemaFactory.createForClass(Produits);