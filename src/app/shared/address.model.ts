import { GeoInfo } from './geo.model';

export class AddressInfo {
  public street: string;
  public suite: string;
  public city: string;
  public zipcode: string;
  public geo: GeoInfo;
  constructor(
    street = '',
    suite = '',
    city = '',
    zipcode = '',
    geo = new GeoInfo()
  ) {
    this.street = street;
    this.suite = suite;
    this.city = city;
    this.zipcode = zipcode;
    this.geo = geo;
  }
}
