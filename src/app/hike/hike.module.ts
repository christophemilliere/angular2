import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HikeListComponent } from './hike-list.component';
import { HikeDetailsComponent } from './hike-details.component';
import { HikeService } from './hide.service';
import { HikeFilterPipe } from './hike-filter.pipe'; 

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [HikeListComponent, HikeDetailsComponent, HikeFilterPipe],
  exports: [HikeListComponent],
  providers: [HikeService]
})
export class HikeModule {

}