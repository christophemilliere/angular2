import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hike } from "./hike";

@Component({
	moduleId: module.id,
	selector: 'hike-summary',
	templateUrl:'hike-summary.component.html'
})
export class HikeSummaryComponent{
	@Input() hike: Hike;
	@Output() addHikeAsFavorite = new EventEmitter<Hike>();
	toogleAsTodoHike(isAdded: any){
		if(isAdded){
			this.addHikeAsFavorite.emit(this.hike);
		}
	}
}