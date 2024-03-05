import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AchatService } from './achats.service';
import { Achats } from './achats.schema';

@Controller('achats')
export class AchatsController { constructor(private readonly AchatService: AchatService) {}
@Post('ajouter')
async ajouterSprint(
    @Body('article') article: string,
    @Body('quantity') quantity: number,
    @Body('prix_unitaire') prix_unitaire: number,
    @Body('date') date: Date,
    @Body('paiement') paiement:string,
   
) {
    const nouveauAchat = await this.AchatService.ajouterAchat(article, quantity, prix_unitaire, date,paiement);
    return { achat: nouveauAchat };

}


@Get('all')
async getAllAchats(){
    const allAchats = await this.AchatService.getAllAchats();
    return {achat : allAchats};
}    

@Patch('update/:id')
async updateAchat(@Param('id') id:string, @Body() updateData: Partial<Achats>){

    const updatedAchat = await this.AchatService.updateAchat(id,updateData);
    return{Achats : updatedAchat};
}

@Delete('delete/:id')
  async deleteAchat(@Param('id') id: string) {
    await this.AchatService.deleteAchat(id);
    return { message: 'achat deleted successfully' };
  }

@Get('getachatbyid/:id')
  async getAchatById(@Param('id') id: string) {
    return this.AchatService.getAchatById(id);
  }


}