import { Component } from '@angular/core';
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import BaseTileLayer from "@arcgis/core/layers/BaseTileLayer";

const startZoom = 20;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tilesRendered = 0;
  zooming = false;
  zoomLevel = 0;
  zoomInterval: any;
  map!: Map;
  view!: MapView;

  ngOnInit() {
      this.map = new Map({
        basemap: "topo-vector"
      });

       this.view = new MapView({
        container: "viewDiv",
        map: this.map,
        center: [-118.80500, 34.02700], // longitude, latitude
        zoom: startZoom
      });

      this.map.add(new MyCustomTileLayer(() => this.tilesRendered++));
  }

  startZooming() {
    this.zooming = true;
    this.zoomLevel = this.view.zoom;
    this.zoomInterval = setInterval(() => {
      let next = this.view.zoom - 1;
      if (next === 0) next = startZoom;
      this.zoomLevel = next;
      this.view.zoom = next;
    }, 250);
  }

  stopZooming() {
    this.zooming = false;
    clearInterval(this.zoomInterval);
  }
}

class MyCustomTileLayer extends BaseTileLayer {
  constructor(private onRender: () => void) {
    super();
  }

  override fetchTile(level: number, row: number, col: number, options: any) {
    // create a canvas with 2D rendering context
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 200;
    canvas.height = 200;

    context!.beginPath();
    context!.arc(100, 75, 50, 0, 2 * Math.PI);
    context!.stroke();

    this.onRender();
    return Promise.resolve(canvas);
  }
}
