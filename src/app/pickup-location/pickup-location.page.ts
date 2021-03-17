// import { HomePage } from './../home/home.page';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Map, tileLayer,marker} from 'leaflet';
// import {NativeGeocoder, NativeGeocoderOptions} from "@ionic-native/native-geocoder/ngx";

@Component({
  selector: 'app-pickup-location',
  templateUrl: './pickup-location.page.html',
  styleUrls: ['./pickup-location.page.scss'],
})
export class PickupLocationPage implements OnInit {
map:Map;
newMarker:any;
  adress:string[];
  constructor(private router:Router) {  }

  ionViewDidEnter(){
    this.loadMap();
  }
loadMap(){
  this.map = new Map("mapId").setView([17.3850,78.4867], 13);
  tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{ attribution: 'Map data © <a href="https://www.openstreetmap.org/%22%3EOpenStreetMap</a> contributors,<a href="https://creativecommons.org/licenses/by-sa/2.0/%22%3ECC-BY-SA</a>'})
    .addTo(this.map);
}
locatePosition(){
  this.map.locate({setView:true}).on("locationfound", (e:any)=>{
    this.newMarker = marker([e.latitude,e.longitude],{
      draggable:true }).addTo(this.map);
      this.newMarker.bindPopup("vous etes ici !").openPopup();
      this.newMarker.on("dragend",()=>{
        const position = this.newMarker.getLatLag();
      });
  });
}
// getAdress(lat:number,long:number){
//  let options:NativeGeocoderOptions={
//    useLocale:true,
//    maxResults:5
//  };
//  this.geocoder.reverseGeocode(lat,long,options).then(
//    results=> {this.adress = Object.values(results[0]).reverse();}
//  );

// }
// confimPickUpLocation(){
// let navigationextras: NavigationExtras={
//   state:{
//     pickupLocation:this.adress
//   }
// };
// this.router.navigate(['home'],navigationextras);
// }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['home']);
  }

}
