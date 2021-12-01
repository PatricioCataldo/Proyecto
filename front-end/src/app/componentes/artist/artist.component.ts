import { Component, OnInit } from '@angular/core';

import { ArtistasService } from 'src/app/servicios/artistas.service';
import { Artistas } from 'src/app/interfaz/artistas';
import { data } from 'jquery';
import { ConsoleLogger } from '@angular/compiler-cli/private/localize';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  ListaArtista=new Array<Artistas>();

  constructor(private http:ArtistasService) { }

  ngOnInit(): void {
    this.http.getArtistas().subscribe(datos=>{
      for(let i=0;i<=datos;i++){

        this.ListaArtista.push(datos.items[i])

      }
      console.log(this.ListaArtista.length);
    });
    console.log(this.ListaArtista);
  }
}
