import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Favorite } from '../models/favorite';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  private apiUrl = 'http://localhost:4201/favorites';
  private userId: number;

  constructor(private http: HttpClient) {
    // Ottieni l'ID dell'utente dal localStorage
    this.userId = JSON.parse(localStorage.getItem('user')!).id;
  }

  getFavourites(): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(`${this.apiUrl}?userId=${this.userId}`);
  }

  addFavourite(movieId: number): Observable<any> {
    const body = {
      userId: this.userId,
      movieId: movieId,
    };
    return this.http.post(this.apiUrl, body);
  }

  // Aggiungi altri metodi se necessario
}
