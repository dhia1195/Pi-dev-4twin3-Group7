/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { Ventes, VentesSchema } from './ventes.schema';
import { VentesService } from './ventes.service';
import { VentesController } from './ventes.controller';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
    imports: [
      MongooseModule.forFeature([
        {
          // eslint-disable-next-line prettier/prettier
          name: "vente",
          schema: VentesSchema,
        },
      ]),
      MongooseModule.forFeature([{ name: Ventes.name, schema: VentesSchema}])
    ],
    controllers: [VentesController],
    providers: [VentesService],
  })
  export class VentesModule {}
