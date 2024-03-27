/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/user/entities/user.entity';

@Schema()
export class Reclamation {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  date: Date;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }] })
  user: User[];
}

export const ReclamationSchema = SchemaFactory.createForClass(Reclamation);
