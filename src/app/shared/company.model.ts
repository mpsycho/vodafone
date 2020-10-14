export class CompanyInfo {
  public name: string;
  public catchPhrase: string;
  public bs: string;
  constructor(name = '', catchPhrase = '', bs = '') {
    this.name = name;
    this.catchPhrase = catchPhrase;
    this.bs = bs;
  }
}
