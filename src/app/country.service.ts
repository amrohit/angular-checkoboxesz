import { Injectable } from '@angular/core';

@Injectable()
export class CountryService {
  // this is a dummy service function to simulate the fact that you get your 
  // countries from an external source, via this service.
  public getCountries(): Country[] {
   return [
    {id: 1, name: 'Italia'},
    {id: 2, name: 'Brasile'},
    {id: 3, name: 'Florida'},
    {id: 4, name: 'Spagna'},
    {id: 5, name: 'Santo Domingo'},
  ];
  }
}