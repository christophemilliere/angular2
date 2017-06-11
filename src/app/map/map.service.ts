import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

declare var google: any;
@Injectable()
export class MapService {
getLatLng(address: string) {
	let geocoder = new google.maps.Geocoder();
		return Observable.create((observable: any) => {
			geocoder.geocode({'address': address}, function(result: any, status: any){
				// tslint:disable-next-line:indent
				if (status === google.maps.GeocoderStatus.OK) {
					console.log(result[0]);
					observable.next(result[0]);
					observable.complete();
				}else{
					console.error('error Status : ', status);
					observable.next({});
					observable.complete();
				}
			});
		})
	}
}