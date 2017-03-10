import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'hike-details',
  templateUrl: 'hike-details.component.html'
})

export class HikeDetailsComponent implements OnInit {
  
  title: string;
  constructor(private _route: ActivatedRoute){
  }

  ngOnInit(){
    let id = this._route.snapshot.params['id'];
    this.title = `Détail de la rando pour l'id: ${id}`;
  }
}