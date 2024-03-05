import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsService } from './clients/clients.service';
import { ClientsController } from './clients/clients.controller';
import { ClientsModule } from './clients/clients.module';
import { Clients, ClientsSchema } from './clients/clients.schema';
import { VentesController } from './ventes/ventes.controller';
import { VentesService } from './ventes/ventes.service';
import { VentesModule } from './ventes/ventes.module';
import { Ventes,VentesSchema } from './ventes/ventes.schema';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([{ name: Clients.name, schema: ClientsSchema }]),
    MongooseModule.forFeature([{ name: Ventes.name, schema: VentesSchema }]),


    
  ],
  controllers: [AppController, ClientsController, VentesController],
  providers: [AppService, ClientsService, VentesService],
})
export class AppModule {}
