import { Component } from '@angular/core';
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import BaseTileLayer from "@arcgis/core/layers/BaseTileLayer";

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

      map.add(new MyCustomTileLayer());
       


  }
}

class MyCustomTileLayer extends BaseTileLayer {
// This method fetches tiles for the specified level and size.
// Override this method to process the data returned from the server.
  override fetchTile(level: number, row: number, col: number, options: any) {

      // create a canvas with 2D rendering context
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = 200;
      canvas.height = 200;


      context!.beginPath();
context!.arc(100, 75, 50, 0, 2 * Math.PI);
context!.stroke();



      return Promise.resolve(canvas);
    }
}
