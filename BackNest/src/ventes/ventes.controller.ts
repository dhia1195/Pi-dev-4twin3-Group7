/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { VentesService } from './ventes.service';
import { Ventes } from './ventes.schema';
import { Date } from 'mongoose';
import { Clients } from 'src/clients/clients.schema';


@Controller('ventes')
export class VentesController {

    constructor(private readonly ventesService: VentesService) {}

    @Post('ajouter')
    async ajouterVente(
        @Body('id_produit') id_produit: string,
        @Body('dateV') dateV: Date,
        @Body('statut_paiement') statut_paiement: boolean,
        @Body('client') client: Clients, // Modification ici
        
    ) {
        const nouveauVentes = await this.ventesService.ajouterVente(id_produit, dateV, statut_paiement, client);
        return { vente: nouveauVentes };
    }
    @Get('getall')
    async getAllVentes() {
      const allVentes = await this.ventesService.getAllVentes();
      return { ventes: allVentes};
  }
  @Delete('delete/:id')
  async deleteVente(@Param('id') id: string) {
    await this.ventesService.deleteVente(id);
    return { message: 'vente deleted successfully' };
  }
  @Patch('update/:id')
  async updateVente(@Param('id') id: string, @Body() updateData: Partial<Ventes>) {
    const updatedVente = await this.ventesService.updateVente(id, updateData);
    return { Vente: updatedVente };
  }
  @Get('getbyid/:id')
  async getById(@Param('id') id: string) {
    return this.ventesService.getById(id);
  }
}