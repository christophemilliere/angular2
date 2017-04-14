import { Component } from '@angular/core';
// import { Hike } from './../shared/hike';
import { Hike } from './hike';
import { HikeService } from './hide.service';

@Component({
  moduleId: module.id,
  selector: 'hike-list',
  templateUrl: 'hike-list.component.html'
})
export class HikeListComponent {
  hikes: Hike[];
  searchTerm: String;

  constructor(private _hikeService: HikeService){
    
  }
  ngOnInit() {
    // this.hikes = this._hikeService.getHikes();
    this._hikeService.getHikesFromApi()
                        .subscribe(
                          res   => this.hikes = res,
                          error => console.error(error.status)
                        )
    console.log(this.hikes);
  }
}