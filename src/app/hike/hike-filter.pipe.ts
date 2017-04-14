import { Pipe, PipeTransform } from '@angular/core';
import { Hike } from './hike';

@Pipe({
  name: 'hikeFilter'
})
export class HikeFilterPipe implements PipeTransform{
  transform(value: Hike[], searchTerm: string){

    if( searchTerm !==  "" ){
      let result = value.filter(hike: Hike) => hike.description.toLowerCase().include(searchTerm));
    }else{
      return value;
    }
  }
}