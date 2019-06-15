import { Component, OnInit } from '@angular/core';
import { Contato } from '../models/contato.model';
import { ContatoService } from '../services/contato.service';
import { Guid } from 'guid-typescript';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contato: Contato;
  contatos: Contato[];

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.contato = new Contato();
    this.contatos = this.contatoService.getAll();
  }

  edit(contato: Contato) {
    console.log(contato.id);
    this.contato = contato;
  }

  delete(contato: Contato) {
    const index = this.contatos.map((item) => item.id).indexOf(contato.id);
    console.log(index);
    this.contatoService.delete(contato);
    this.contatos.splice(index, 1);
  }

  saveContato(form: NgForm) {
    this.contato = form.value;
    this.contato.id  = (this.contato.id) ? this.contato.id :   Guid.create().toString();
    this.contatoService.save(this.contato);
    this.contatos = this.contatoService.getAll();
    console.log(this.contato);
  }

}
