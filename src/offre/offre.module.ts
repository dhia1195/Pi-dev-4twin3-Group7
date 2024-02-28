/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { OffreService } from './offre.service';
import { OffreController } from './offre.controller';
import { OffreSchema } from './entities/offre.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        // eslint-disable-next-line prettier/prettier
        name: "offre",
        schema: OffreSchema
     }])
    ],
  providers: [OffreService, OffreService],
  controllers: [OffreController]
})
export class OffreModule {}
