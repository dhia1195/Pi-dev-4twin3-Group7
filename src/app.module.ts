import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ReclamationModule } from 'src/reclamation/reclamation.module';
import { OffreModule } from './offre/offre.module';
import { ProduitsModule } from './produits/produits.module';
import { FacturesModule } from './factures/factures.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://db:27017/pidev'),
    UserModule,
    ReclamationModule,
    OffreModule,
    ProduitsModule,
    FacturesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
