import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Anime } from '../models/anime.interface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-mestre',
  templateUrl: './mestre.component.html',
  styleUrls: ['./mestre.component.css']
})
export class MestreComponent implements OnInit {

  list: Anime[];
  constructor(private api: ApiService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.api.getData()
    .subscribe((response: any ) => {
      this.list = response.data;
    });
  }

  goToDetailByService(anime: Anime) {
    this.dataService.setAnime(anime);
    this.router.navigateByUrl('/detalhes');
  }

  gotToDetailByState(anime: Anime)  {
     this.router.navigateByUrl('/detalhes', {
       state: anime
       });
  }

}
