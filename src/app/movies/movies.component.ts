import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  constructor(private movie: MoviesService) {}
  movies: Movie[] = [];
  ngOnInit(): void {
    this.movie.getMovies().subscribe({
      next: (data) => {
        this.movies = data;
      },
      error: (e) => {},
    });
  }
}
