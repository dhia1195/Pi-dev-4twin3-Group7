/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateReclamationDto } from './dto/create-reclamation.dto';
import { UpdateReclamationDto } from './dto/update-reclamation.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reclamation } from './entities/reclamation.entity';
@Injectable()
export class ReclamationService {
  constructor(
    @InjectModel('reclamation')
    private readonly ReclamationModel: Model<Reclamation>,
  ) {}

  async create(
    createReclamationDto: CreateReclamationDto,
  ): Promise<Reclamation> {
    console.log("added with success");
    const createdReclamation = new this.ReclamationModel(createReclamationDto);
    return createdReclamation.save();
  }

  async findAll(): Promise<Reclamation[]> {
    return this.ReclamationModel.find();
  }

  findOne(id: string) {
    return this.ReclamationModel.findById(id);
  }

  update(id: string, updateReclamationDto: UpdateReclamationDto) {
    return this.ReclamationModel.findByIdAndUpdate(id, updateReclamationDto);
  }

  remove(id: string) {
    return this.ReclamationModel.findByIdAndDelete(id);
  }
}
