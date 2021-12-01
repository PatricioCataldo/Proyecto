import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ArtistComponent } from './componentes/artist/artist.component';
import { NewsComponent } from './componentes/news/news.component';
import { TeamComponent } from './componentes/team/team.component';
import { AboutComponent } from './componentes/about/about.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { RegisterComponent } from './componentes/register/register.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,

    ArtistComponent,
    NewsComponent,
    TeamComponent,
    AboutComponent,
    SignupComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
