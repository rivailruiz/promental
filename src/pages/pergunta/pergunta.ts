import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage  } from '../home/home'; 
import { ApiService } from '../../providers/api';

/**
 * Generated class for the Pergunta page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pergunta',
  templateUrl: 'pergunta.html',
  providers: [ApiService]
})
export class PerguntaPage {

  titulo: any;
  corpo: any;
  id: any;
  contador: 0;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public api: ApiService
    ) {
      this.corpo = navParams.get("corpo");
      this.titulo = navParams.get("titulo");
      this.id = navParams.get("id");
  }

  ionViewDidLoad() {

  }

  proximaPergunta() {
    this.api.getPergunta().then(data => {
      let pergunta = data[1];
      this.navCtrl.push(PerguntaPage, {titulo: pergunta.titulo, corpo: pergunta.corpo, id: pergunta.id });
 	  });
    
  }

}
