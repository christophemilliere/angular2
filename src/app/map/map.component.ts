import { Component, ApplicationRef } from '@angular/core';
import { MapService } from './map.service';

@Component({
    moduleId: module.id,
    selector: 'hike-map',
    templateUrl: 'map.component.html',
    styleUrls: ['map.component.css']
})
export class MapComponent {
    lat: number = 48.30740;
    lng: number = -1.43276;
    droppedLat: number;
    droppedLng: number;
    markerWasDropped: boolean;
    startingPoint: string = 'La ville Ollivier, 35140 Mézières-sur-Couesnon, France';
    markers: marker[] = [];
    markersFromCoords: marker[] = [];
    pointsForPolyline: coord[] = [];

    constructor(private _mapService: MapService, private _applicationRef: ApplicationRef) {

    }

    onCoordMarkerDropped(event: any) {
        this.markerWasDropped = true;
        this.droppedLat = event.coords.lat.toFixed(5);
        this.droppedLng = event.coords.lng.toFixed(5);
    }
    geocode() {
        this._mapService.getLatLng(this.startingPoint).subscribe(
            (data: any) => this.placeMarkerOnGeocodePlace(data),
            (error: any) => console.log(error)
        );
    }

    placeMarkerOnGeocodePlace(location: any) {
        let marker = {
            lat: location.geometry.location.lat(),
            lng: location.geometry.location.lng(),
            title: '',
            draggable: true
        }
        if( this.pointsForPolyline.length === 0 ) {
            this.pointsForPolyline.push( { lat: marker.lat, lng: marker.lng } );
        }
        this.markers.push(marker);
        this._applicationRef.tick();
    }
    addMarkerByCoords(formValue: any,  e: any) {
        e.preventDefault();
        let marker = { lat: 0, lng: 0, draggable: false, icon: '', title: '' };
        marker.lat = parseFloat(formValue.markerByCoordsLat);
        marker.lng = parseFloat(formValue.markerByCoordsLng);
        marker.icon = 'app/map/images/greenmarker.png';
        this.markersFromCoords.push(marker);
    }

    updatePolyline(event: any) {
        let droppedLatForPolyline = parseFloat(event.coords.lat);
        let droppedLngForPolyline = parseFloat(event.coords.lng);
        this.pointsForPolyline.push({lat: droppedLatForPolyline, lng: droppedLngForPolyline});
    }

    deletePolyline() {
        this.pointsForPolyline = [];
    }
}

interface marker {
    lat: number;
    lng: number;
    title?: string;
    icon?: string;
    draggable: boolean;
}

interface coord {
    lat: number;
    lng: number;
}