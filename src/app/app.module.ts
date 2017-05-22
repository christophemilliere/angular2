import { HttpModule } from '@angular/http';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { AppComponent }  from './app.component';
import { HikeModule } from './hike/hike.module';
import { HomeComponent } from './home/home.component';
import { HikeListComponent } from './hike/hike-list.component';
import { HikeDetailsComponent } from './hike/hike-details.component';
import { PageNotFoundComponent } from './page-not-found.component';
import {ContactModule } from './contact/contact.module';
import { ContactUsComponent } from './contact/contact-us.component';


@NgModule({
  imports:      [ BrowserModule, 
                  HikeModule, 
                  HttpModule, 
                  HomeModule,
                  ContactModule, 
                  RouterModule.forRoot([
                    { path: 'home', component: HomeComponent },
                    { path: 'hikes', component: HikeListComponent },
                    { path: 'hikes/:id', component: HikeDetailsComponent },
                    { path: 'contact', component: ContactUsComponent },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', component: PageNotFoundComponent }
                  ])],
  declarations: [ AppComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
