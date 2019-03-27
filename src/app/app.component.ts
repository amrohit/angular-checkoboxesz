import { Component, OnInit} from '@angular/core';

import { CountryService } from './country.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  public countries: Country[];

  constructor(private countryService: CountryService) {}
  
  public ngOnInit(): void {
    // loading of countries, simulate some delay
    setTimeout(() => {
       this.countries = this.countryService.getCountries();
    }, 1000);
  }

  // this function does the job of sending the selected countried out the component
  public sendCheckedCountries(): void {
    const selectedCountries = this.countries.filter( (country) => country.checked );
    // you could use an EventEmitter and emit the selected values here, or send them to another API with some service

    console.log (selectedCountries);
  }

}
