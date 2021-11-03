import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-postman',
  templateUrl: './postman.component.html',
  styleUrls: ['./postman.component.scss'],
})
export class PostmanComponent implements OnInit {

  constructor(
    private storage: Storage,
    private rest: ApiserviceService
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
    if(this.storage.get('postmanConocidos') === undefined){
      this.storage.set('postmanConocidos',this.urlConocidas)
    }
    this.getProducts()
  }

  // ENVIAR URL AL SERVICIO
  public respuesta;
  getProducts(): void {
    this.rest.getURL(this.url).subscribe((resp: any) => {
      this.respuesta = resp;
      console.log(this.respuesta);
    });
  }

}
