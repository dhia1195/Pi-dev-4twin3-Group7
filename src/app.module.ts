import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ReclamationModule } from 'src/reclamation/reclamation.module';
import { OffreModule } from './offre/offre.module';
import { ProduitsModule } from './produits/produits.module';
import { FacturesModule } from './factures/factures.module';
import { AchatsModule } from './achats/achats.module';
import { VentesModule } from './ventes/ventes.module';
import { ClientsModule } from './clients/clients.module';
import { FournisseursModule } from './fournisseurs/fournisseurs.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/pidev'),
    UserModule,
    ReclamationModule,
    OffreModule,
    ProduitsModule,
    FacturesModule,
    AchatsModule,
    VentesModule,
    ClientsModule,
    FournisseursModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
