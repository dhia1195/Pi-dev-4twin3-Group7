import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProduitSchema, Produits } from './produits/produits/produits.schema';
import { ProduitsController } from './produits/produits/produits.controller';
import { ProduitsService } from './produits/produits/produits.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([{ name: Produits.name, schema: ProduitSchema}])
  ],
  controllers: [AppController, ProduitsController],
  providers: [AppService, ProduitsService],
})
export class AppModule {}
