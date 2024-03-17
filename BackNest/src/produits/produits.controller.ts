/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProduitsService } from './produits.service';
import { Produits } from './produits.schema';

@Controller('produits')
export class ProduitsController { constructor(private readonly produitsService: ProduitsService) {}

@Post('ajouter')
async ajouterSprint(
    @Body('nom') nom: string,
    @Body('prix') prix: number,
    @Body('quantite') quantite: number,
    @Body('categorie') categorie: string,
    @Body('offre') offre: number,
   
) {
    const nouveauProduits = await this.produitsService.ajouterProduit(nom,prix,quantite,categorie,offre);
    return { produits: nouveauProduits };}

@Get('all')
async getAllProduits(){
    const allproduits = await this.produitsService.getAllProduits();
    return {produits : allproduits};
}    
@Patch('update/:id')
async updateProduits(@Param('id') id:string, @Body() updateData: Partial<Produits>){

    const updatedProduits = await this.produitsService.updateProduit(id,updateData);
    return{produits : updatedProduits};
}

@Delete(':id')
  async deleteProduits(@Param('id') id: string) {
    await this.produitsService.deleteProduit(id);
    return { message: 'Produits deleted successfully' };
  }

@Get('getProduitsbyid/:id')
  async getProduitsById(@Param('id') id: string) {
    return this.produitsService.getProduitById(id);
  }



}