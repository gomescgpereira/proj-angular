import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anime } from '../models/anime.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://kitsu.io/api/edge/anime?page[limit]=10';

  constructor(private http: HttpClient) { }

  getData() {
     return this.http.get<Anime[]>(this.url);
  }
}
