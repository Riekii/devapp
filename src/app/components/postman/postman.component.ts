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
    private modalControler: ModalController,
    private postmanFrecuentes: PostmanFrecuentesComponent
  ) { }

  public folder;

  ngOnInit() {
    this.folder = "Postman";
    this.storage.create();
    this.storage.get('listaURL').then((val) => {
      this.urlConocidas = val
    });
  }

  public urlForm = new FormGroup({
    url: new FormControl('')
  })

  // RECOGER URL
  public url: string;
  public urlConocidas: any[] = [];
  enviarUrl(urlValue){
    // COGER URL DEL FORMULARIO
    this.url = urlValue.url;
    // RECOGE LAS URL ALMACENADAS Y AÑADE ESTA
    this.storage.get('listaURL').then((val) => {
      this.urlConocidas = val
      if(this.urlConocidas.length > 50){
        this.urlConocidas.shift();
      }
      this.urlConocidas.push(this.url);
      this.storage.set('listaURL', this.urlConocidas)
    });


    this.getData()
  }

  // ENVIAR URL AL SERVICIO
  public respuesta;
  getData(): void {
    this.rest.getURL(this.url).subscribe((resp: any) => {
      let jsonString = JSON.stringify(resp);
      this.respuesta = this.formatJson(jsonString);
    });
  }

  // ENVIAR DESDE FRECUENTES
  getURLFrecuentes(url): void {
    this.rest.getURL(url).subscribe((resp: any) => {
      let jsonString = JSON.stringify(resp);
      this.respuesta = this.formatJson(jsonString);
    });
  }

  // FORMATEAR EL JSON
  formatJson(jsonString){
    let llaveAbrir = jsonString.split("{").length - 1;
    let llaveCerrar = jsonString.split("}").length - 1;

    let respuestaArrayF0 = jsonString.replace(/,/g,"<br/>").split("{");
    let respuestaArrayF1 = [];
    let counterCorchete = 0;

    for (let index = 1; index < respuestaArrayF0.length; index++) {
      let line = respuestaArrayF0[index];

      line = line.replace(/}/g, "<br/>")

      if((line.split("[").length - 1) !== 0){counterCorchete++}
      else if((line.split("]").length - 1) !== 0){counterCorchete--}

      let divIn = '<div class="corchete">';
      let divOut = '</div>';
      for (let index = 0; index < counterCorchete; index++) {
        divIn = divIn+divIn;
        divOut = divOut+divOut;
      }
      line = divIn + line + divOut;
      
      respuestaArrayF1.push(line)
    }
    let respuesta = respuestaArrayF1.join()

    return respuesta;
  }
  
  // ABRIR MODAL
  async presentModal() {
    const modal = await this.modalControler.create({
      component: PostmanFrecuentesComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: { url: this.url }
    });
    modal.onDidDismiss().then((data)=>{
      this.storage.get('urlFrecuente').then((val) => {
        this.getURLFrecuentes(val)
      });
    })
    return await modal.present();
  }

}
