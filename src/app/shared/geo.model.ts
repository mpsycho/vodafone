export class GeoInfo {
  public lat: string;
  public lng: string;
  constructor(lat = '', lng = '') {
    this.lat = lat;
    this.lng = lng;
  }
}
