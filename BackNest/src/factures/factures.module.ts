/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FactureSchema, Factures } from './factures.schema';
import { FacturesController } from './factures.controller';
import { FacturesService } from './factures.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
      MongooseModule.forFeature([
        {
          // eslint-disable-next-line prettier/prettier
          name: "factures",
          schema: FactureSchema,
        },
      ]),
      MongooseModule.forFeature([{ name: Factures.name, schema: FactureSchema}])
    ],
    controllers: [FacturesController],
    providers: [FacturesService],
  })
export class FacturesModule {}
