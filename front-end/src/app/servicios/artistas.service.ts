import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArtistasService {

  constructor(private http:HttpClient) { }

  getArtistas():Observable<any>{
    return this.http.get(`${environment.hostname}/Artistas`)
  }
}
