import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './componentes/home/home.component'
import {ArtistComponent} from './componentes/artist/artist.component';
import { NewsComponent } from './componentes/news/news.component';
import { TeamComponent } from './componentes/team/team.component';
import { AboutComponent } from './componentes/about/about.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { RegisterComponent } from './componentes/register/register.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'artistas', component:ArtistComponent},
  {path:'noticias',component:NewsComponent},
  {path:'equipo',component:TeamComponent},
  {path:'acerca_de',component:AboutComponent},
  {path:'ingresar',component:SignupComponent},
  {path:'registrar',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
