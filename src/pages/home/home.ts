import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TutoScreen } from '../tuto-screen/tuto-screen';
import { PerguntaPage } from '../pergunta/pergunta';
import { ApiService } from '../../providers/api';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ApiService]

})
export class HomePage {
	sexo: any;
	situacao: any;
  nome: any;
  dados: {};
  pergunta: any;


  constructor(
    public navCtrl: NavController,
    public api: ApiService
  ) {

  }

  enviaDados(){
    this.dados = {nome: this.nome, sexo: this.sexo, situacao: this.situacao}
    console.log(this.dados);
    this.proximaPergunta();
  }

  proximaPergunta() {
    this.api.getPergunta().then(data => {
      let pergunta = data[0];
      this.navCtrl.push(PerguntaPage, {titulo: pergunta.titulo, corpo: pergunta.corpo, id: pergunta.id });
 	  });
    
  }

}
