import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-postman-frecuentes',
  templateUrl: './postman-frecuentes.component.html',
  styleUrls: ['./postman-frecuentes.component.scss'],
})
export class PostmanFrecuentesComponent implements OnInit {

  constructor(
    private modalControler: ModalController
  ) { }

  ngOnInit() {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalControler.dismiss({
      'dismissed': true
    });
  }

}
