/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const ReclamationSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
});

export interface Reclamation extends Document {
  title: string;
  description: string;
  date: Date;
}
