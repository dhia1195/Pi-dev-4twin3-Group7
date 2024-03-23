/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { Clients, ClientsSchema } from './clients.schema';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
      MongooseModule.forFeature([
        {
          // eslint-disable-next-line prettier/prettier
          name: "client",
          schema: ClientsSchema,
        },
      ]),
      MongooseModule.forFeature([{ name: Clients.name, schema: ClientsSchema}])
    ],
    controllers: [ClientsController],
    providers: [ClientsService],
  })
export class ClientsModule {}
