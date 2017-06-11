import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapService } from './map.service';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAFMvVm9A2hHdd1So5Ngzi11xL1eN4b8w4'
        })
    ],
    providers: [MapService],
    declarations: [MapComponent]
    
})
export class MapModule {}