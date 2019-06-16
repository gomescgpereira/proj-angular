import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localiza',
  templateUrl: './localiza.component.html',
  styleUrls: ['./localiza.component.css']
})
export class LocalizaComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  
  constructor() { }

  ngOnInit() {
  }

}
