/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const OffreSchema = new mongoose.Schema({
  reduction: Number,
  condition: Number,
  dateD: Date,
  dateF:Date,
});

export interface Offre extends Document {
  reduction: number;
  condition: number;
  dateD: Date;
  dateF:Date,

}
