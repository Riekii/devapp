import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-postman-frecuentes',
  templateUrl: './postman-frecuentes.component.html',
  styleUrls: ['./postman-frecuentes.component.scss'],
})

@Injectable()
export class PostmanFrecuentesComponent implements OnInit {

  constructor(
    private storage: Storage,
    private modalControler: ModalController
  ) { }

  ngOnInit() {
    this.storage.create();
    this.getUrls();
  }

  // CERRAR MODAL
  dismiss() {
    this.modalControler.dismiss({
      'dismissed': true
    });
  }

  // RECOGER FRECUENTES
  public urlConocidas;
  getUrls(){
    this.storage.get('listaURL').then((val) => {
      this.urlConocidas = val;
    });
  }

  // BUSCAR URL
  public url;
  sendURL(url){
    this.storage.set('urlFrecuente', url)
    this.dismiss()
  }

}
