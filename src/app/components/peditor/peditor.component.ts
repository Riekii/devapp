import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peditor',
  templateUrl: './peditor.component.html',
  styleUrls: ['./peditor.component.scss'],
})
export class PeditorComponent implements OnInit {

  public folder = 'Editor'

  public stop = 0
  public smid = 0
  public sbot = 0

  constructor() { }

  ngOnInit() {}

}
