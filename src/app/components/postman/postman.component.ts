import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IonRouterOutlet } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { PostmanFrecuentesComponent } from '../modal/postman-frecuentes/postman-frecuentes.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-postman',
  templateUrl: './postman.component.html',
  styleUrls: ['./postman.component.scss'],
})
export class PostmanComponent implements OnInit {

  constructor(
    private storage: Storage,
    private rest: ApiserviceService,
    private routerOutlet: IonRouterOutlet,
    private modalControler: ModalController
  ) { }

  public folder;

  ngOnInit() {
    this.folder = "Postman";
    this.storage.create();
  }

  public urlForm = new FormGroup({
    url: new FormControl('')
  })

  // RECOGER URL
  public url: string;
  public urlConocidas: string[];
  enviarUrl(urlValue){
    this.url = urlValue.url;
    this.urlForm;

    // this.urlConocidas = this.storage.get('listaURL')
    this.urlConocidas.push(this.url)
    this.storage.set('listaURL', this.urlConocidas)

    this.storage.get('listaURL').then((val) => {
      console.log('Your age is', val);
    });
    this.getProducts()
  }

  // ENVIAR URL AL SERVICIO
  public respuesta;
  getProducts(): void {
    this.rest.getURL(this.url).subscribe((resp: any) => {
      let jsonString = JSON.stringify(resp);
      this.respuesta = this.formatJson(jsonString);
    });
  }

  // FORMATEAR EL JSON
  formatJson(jsonString){
    let llaveAbrir = jsonString.split("{").length - 1;
    let llaveCerrar = jsonString.split("}").length - 1;

    jsonString.replace("{","");
    jsonString.replace("}","");
    
    let respuesta = jsonString.replace("}","");
    return respuesta;
  }
  
  // ABRIR MODAL
  async presentModal() {
    const modal = await this.modalControler.create({
      component: PostmanFrecuentesComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }

}
