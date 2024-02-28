/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const OffreSchema = new mongoose.Schema({
  title: String,
  description: String,
  dateD: Date,
  dateF:Date,
});

export interface Offre extends Document {
  title: string;
  description: string;
  dateD: Date;
  dateF:Date,

}
