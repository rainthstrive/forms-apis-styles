import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * API: https://www.weatherapi.com
 */

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {
  private cities = ['Monterrey', 'Saltillo', 'Guadalajara', 'Queretaro', 'Manzanillo', 'Cancun', 'Merida', 'Tijuana', 'Mazatlan', 'Acapulco'];
  private readonly APIkey = 'LA API KEY';

  constructor(private http: HttpClient) { }

  getWeatherInfo() {
    const randomIndex = Math.floor(Math.random() * this.cities.length);
    const url = `http://api.weatherapi.com/v1/current.json?key=${this.APIkey}&q=${this.cities[randomIndex]}&aqi=no`
    return this.http.get(url);
  }
}
