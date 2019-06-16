import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anime } from '../models/anime.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private anime: Anime;

  constructor() { }

  setAnime(anime: Anime) {
    this.anime = anime;
  }

  getAnime() {
    return this.anime;
  }
}
