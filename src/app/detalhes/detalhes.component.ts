import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) {
    const nav = this.router.getCurrentNavigation();
    console.log(nav.extras.state);
   }

  ngOnInit() {
    console.log(this.dataService.getAnime());
  }

}
