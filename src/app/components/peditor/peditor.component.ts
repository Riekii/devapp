import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peditor',
  templateUrl: './peditor.component.html',
  styleUrls: ['./peditor.component.scss'],
})
export class PeditorComponent implements OnInit {

  public folder = 'Editor'

  public maxpartes = 3;

  public stop = 1
  public smid = 1
  public sbot = 1
  arrayPartes = []

  constructor() { }

  ngOnInit() {
    this.formarPJ(true)
  }

  formarPJ(cero?){
    if(cero){
      this.arrayPartes = [{
        top: 1,
        mid: 1,
        bot: 1
      }]
    }
    else{
      this.stop = this.arrayPartes[0]['top']
      this.smid = this.arrayPartes[0]['mid']
      this.sbot = this.arrayPartes[0]['bot']
    }
  }

  pasarElemento(parte: string, mas: boolean){
    if(mas === true && this.arrayPartes[0][parte] < this.maxpartes){
      this.arrayPartes[0][parte] = this.arrayPartes[0][parte] + 1
    }
    else if(mas === false && this.arrayPartes[0][parte] > 1){
      this.arrayPartes[0][parte] = this.arrayPartes[0][parte] - 1
    }
    this.formarPJ()
  }

}
