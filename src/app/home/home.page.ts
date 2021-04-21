import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, Message } from '../services/data.service';
import { WeatherAPIService } from '../services/weather-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService, private api: WeatherAPIService, private router: Router) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  addMessageFromAPI() {
    //this.data.addMessage();
    this.api.getWeatherInfo().subscribe((res: any) => {
      console.log(res);
      this.data.addMessageInput({
        reportero: 'Sistema ' + res.location.name,
        ciudad: res.location.name,
        temperatura: res.current.temp_c
      })
    });
    //console.log("Added Message From API");
  }

  addMessageFromForm() {
    this.router.navigateByUrl("/input")
  }

}
