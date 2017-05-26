import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HikeListComponent } from './hike-list.component';
import { HikeDetailsComponent } from './hike-details.component';
import { HikeService } from './hide.service';
import { HikeFilterPipe } from './hike-filter.pipe'; 
import { HikeSummaryComponent } from './hike-summary.component'; 


@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [HikeListComponent, HikeDetailsComponent, HikeFilterPipe, HikeSummaryComponent],
  exports: [HikeListComponent],
  providers: [HikeService]
})
export class HikeModule {

}