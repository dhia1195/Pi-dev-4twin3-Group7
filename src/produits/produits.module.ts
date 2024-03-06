/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProduitSchema, Produits } from './produits.schema';
import { ProduitsController } from './produits.controller';
import { ProduitsService } from './produits.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        // eslint-disable-next-line prettier/prettier
        name: "produits",
        schema: ProduitSchema,
      },
    ]),
    MongooseModule.forFeature([{ name: Produits.name, schema: ProduitSchema}])
  ],
  controllers: [ProduitsController],
  providers: [ProduitsService],
})
export class ProduitsModule {}
