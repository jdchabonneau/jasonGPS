import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onCornerClick(cornerPosition) {
    //console.log(cornerPosition);
    this.getLocation();
  }
   getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }
    showPosition(position) {
      //x.innerHTML = "Latitude: " + position.coords.latitude + 
      //"<br>Longitude: " + position.coords.longitude; 
      console.log("Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);
    }
  }


