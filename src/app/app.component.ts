import { Component } from '@angular/core';
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esri4-pwa';

  ngOnInit() {
      var map = new Map({
        basemap: "topo-vector"
      });

      const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-118.80500, 34.02700], // longitude, latitude
      zoom: 13
      });

      console.log(view);

  }
}
