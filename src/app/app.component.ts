import { Component } from '@angular/core';
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import BaseTileLayer from "@arcgis/core/layers/BaseTileLayer";
import TileLayer from "@arcgis/core/layers/TileLayer";
import * as watchUtils from "@arcgis/core/core/watchUtils";


// determined by console logging scale at different zoom levels
const scales = [
  70.5310735,
  141.062147,
  282.124294,
  564.248588,
  1128.497176,
  2256.994353,
  4513.988705,
  9027.977411,
  18055.954822,
  36111.909643,
  72223.819286,
  144447.638572,
  288895.277144,
  577790.554289,
  1155581.108577,
  2311162.217155,
  4622324.434309,
  9244648.868618,
  18489297.737236,
  36978595.474472,
  73957190.948944,
  147914381.897889,
  295828763.795777,
]

const startZoom = scales.length-1;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  zooming = false;
  zoomLevel = 0;
  tileLayers = [] as (TileLayer | BaseTileLayer)[];
  animateZoom = true;
  map!: Map;
  view!: MapView;
  zoomInButton!: HTMLElement;
  zoomOutButton!: HTMLElement;
  zoomViaClick = true;

  zoomLen = 200;



  ngOnInit() {
      this.map = new Map({
         basemap: "streets"
      });

       this.view = new MapView({
        container: "viewDiv",
        map: this.map,
        center: [-118.80500, 34.02700], // longitude, latitude
        zoom: startZoom
      });

      watchUtils.whenEqualOnce(this.view, "ready", true, () => {
        this.zoomInButton = document.querySelector('[title="Zoom in"]')!;
        this.zoomOutButton = document.querySelector('[title="Zoom out"]')!;


        // Start with one tile layer
        this.addTileLayer();


        // Start zooming on load
        this.startZooming();
      });

  }

  changeZoomLen(event: any) {
    this.zoomLen = event.target.value;
  }

  addTileLayer() {
    const layer = new MyCustomTileLayer()
    this.tileLayers.unshift(layer);
    this.map.add(this.tileLayers[0]);
  }

  removeTileLayer() {
    this.map.remove(this.tileLayers.pop()!);
  }

  startZooming() {
    let delta = 1;

    this.zooming = true;

    const doZoom = () => {
      let next = this.zoomLevel + delta;
      if (next <= 0 || next >= startZoom) {
        delta = -delta;
      }
      this.zoomLevel = next;

      if (!this.zoomViaClick) {
        this.view.goTo(
          { scale: scales[this.zoomLevel] },
          { animate: this.animateZoom, duration: this.zoomLen / 2 }
        )
      } else {
        (delta == 1 ? this.zoomOutButton : this.zoomInButton).click();
      }

      if (this.zooming) {
        setTimeout(doZoom, this.zoomLen);
      }
    }

    doZoom();


  }

  stopZooming() {
    this.zooming = false;
  }

  toggleAnimateZoom() {
    this.animateZoom = !this.animateZoom;
  }

  toggleZoomViaClick() {
    this.zoomViaClick = !this.zoomViaClick;
  }
}

class MyCustomTileLayer extends BaseTileLayer {
  tileCanvas: HTMLCanvasElement;

  constructor() {
    super();

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 200;
    canvas.height = 200;

    context!.beginPath();
    context!.arc(100, 75, 50, 0, 2 * Math.PI);
    context!.stroke();

    this.tileCanvas = canvas;
  }

  override fetchTile() {
    return Promise.resolve(this.tileCanvas);
  }
}
