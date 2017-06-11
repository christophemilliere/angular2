import { HttpModule } from '@angular/http';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { HomeModule } from './home/home.module';
import { AppComponent }  from './app.component';
import { HikeModule } from './hike/hike.module';
import { HomeComponent } from './home/home.component';
import { HikeListComponent } from './hike/hike-list.component';
import { HikeDetailsComponent } from './hike/hike-details.component';
import { PageNotFoundComponent } from './page-not-found.component';
import {ContactModule } from './contact/contact.module';
import { ContactUsComponent } from './contact/contact-us.component';
import { MapModule } from './map/map.module';
import { MapComponent } from './map/map.component';


@NgModule({
  imports:      [ BrowserModule,
                  HikeModule,
                  HttpModule,
                  HomeModule,
                  ContactModule,
                  BrowserAnimationsModule,
                  MapModule,
                  RouterModule.forRoot([
                    { path: 'home', component: HomeComponent },
                    { path: 'hikes', component: HikeListComponent },
                    { path: 'hikes/:id', component: HikeDetailsComponent },
                    { path: 'contact', component: ContactUsComponent },
                    { path: 'map', component: MapComponent },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', component: PageNotFoundComponent }
                  ])],
  declarations: [ AppComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
