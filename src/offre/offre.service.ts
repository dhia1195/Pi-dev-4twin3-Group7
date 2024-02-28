/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateOffreDto } from './dto/create-offre.dto';
import { Model } from 'mongoose';
import { Offre } from './entities/offre.entity';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateOffreDto } from './dto/update-offre.dto';

@Injectable()
export class OffreService { constructor(
    @InjectModel('offre')
    private readonly OffreModel: Model<Offre>,
  ) {}

  async create(
    createOffreDto: CreateOffreDto,
  ): Promise<Offre> {
    console.log("offre added with success");
    const createdOffre = new this.OffreModel(createOffreDto);
    return createdOffre.save();
  }

  async findAll(): Promise<Offre[]> {
    return this.OffreModel.find();
  }

  findOne(id: string) {
    return this.OffreModel.findById(id);
  }

  update(id: string, updateOffreDto: UpdateOffreDto) {
    return this.OffreModel.findByIdAndUpdate(id, updateOffreDto);
  }

  remove(id: string) {
    return this.OffreModel.findByIdAndDelete(id);
  }
}
