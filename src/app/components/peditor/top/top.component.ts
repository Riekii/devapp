import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {

  @Input() seleccion = 0

  public urlbase: string = '.../../../../assets/peditor/top/';
  public src : string;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(){
    console.log('top', this.seleccion);
    this.src = this.urlbase + this.seleccion.toString()+'.png';
  }

}
