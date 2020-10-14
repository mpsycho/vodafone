import { AddressInfo } from './address.model';
import { CompanyInfo } from './company.model';

export class User {
  public id: number;
  public name: string;
  public username: string;
  public email: string;
  public address: AddressInfo;
  public phone: string;
  public website: string;
  public company: CompanyInfo;

  constructor(
    id = 0,
    name = '',
    username = '',
    email = '',
    address = new AddressInfo(),
    phone = '',
    website = '',
    company = new CompanyInfo()
  ) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.company = company;
  }
}
