import { Component } from '@angular/core';
// tslint:disable-next-line:no-unused-variable
import { Hike } from './hike/hike';
import { HikeService } from './hike/hide.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent  {
  hikes: Hike[];

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
