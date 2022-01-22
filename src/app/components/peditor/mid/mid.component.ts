import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mid',
  templateUrl: './mid.component.html',
  styleUrls: ['./mid.component.scss'],
})
export class MidComponent implements OnInit {
  
  @Input() seleccion = 0

  public urlbase: string = '.../../../../assets/peditor/mid/';
  public src : string;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(){
    console.log('mid', this.seleccion);
    this.src = this.urlbase + this.seleccion.toString()+'.png';
  }
}
