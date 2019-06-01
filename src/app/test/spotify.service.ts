import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
  RequestOptions,
} from '@angular/http';
import {map} from "rxjs/operators";
import { Observable } from 'rxjs/internal/observable';

/**
 * SpotifyService works querying the Spotify Web API
 * https://developer.spotify.com/web-api/
 */

@Injectable()
export class SpotifyService {
environment = {SpotifyAPIKey :'BQCYjUNs5azEo0LhSDrel4eals2VRcLcMG0YMPyNs31YQ4ulN3wKC7bKcM11UwItYiDm7Rs5y42czF8NznzY0jBVx2Y9wRKZch02KXWmb4qA7jRC3PSwhXritE_p8S0Vgr8b7kf-49Y8Gr7066YkmBOQ70IfQFhPAg'};

  static BASE_URL = 'https://api.spotify.com/v1';

  constructor(private http: Http) {}

  query(
    URL: string,
    params?: Array<string>
  ): Observable<any[]> {
    let queryURL = `${SpotifyService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }
    const apiKey = this.environment.SpotifyAPIKey;
    const headers = new Headers({
      Authorization: `Bearer ${apiKey}`
    });
    const options = new RequestOptions({
      headers: headers
    });

    return this.http
      .request(queryURL, options)
      .pipe(map((res: any) => res.json()));
  }

  search(query: string, type: string): Observable<any[]> {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${type}`
    ]);
  }

  searchTrack(query: string): Observable<any[]> {
    return this.search(query, 'track');
  }

  getTrack(id: string): Observable<any[]> {
    return this.query(`/tracks/${id}`);
  }

  getArtist(id: string): Observable<any[]> {
    return this.query(`/artists/${id}`);
  }

  getAlbum(id: string): Observable<any[]> {
    return this.query(`/albums/${id}`);
  }
}

export const SPOTIFY_PROVIDERS: Array<any> = [
  { provide: SpotifyService, useClass: SpotifyService }
];
