import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss'],
})
export class BotComponent implements OnInit {

  @Input() seleccion = 0

  public urlbase: string = '.../../../../assets/peditor/bot/';
  public src : string;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(){
    console.log('bot', this.seleccion);
    this.src = this.urlbase + this.seleccion.toString()+'.png';
  }
}
