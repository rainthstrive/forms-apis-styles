import { Injectable } from '@angular/core';

export interface Message {
  reportero: string;
  ciudad: string;
  date: string;
  id: number;
  read: boolean;
  temperatura: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      reportero: 'Sistema',
      ciudad: 'Monterrey',
      date: '9:32 AM',
      id: 0,
      read: false,
      temperatura: '20 °C'
    },
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages.find(el => el.id === id);
  }

  public addMessageInput(message: any) {
    this.messages.unshift({
      reportero: message.reportero,
      ciudad: message.ciudad,
      date: this.getCurrentTime(),
      id: this.messages.length,
      read: false,
      temperatura: String(message.temperatura) + " °C"
    });

    console.log(this.messages)
  }

  getCurrentTime(){
    var currentDate = new Date();
    return     currentDate.getHours() + ":"
             + currentDate.getMinutes() + " "
             + this.getTimeSpecific(currentDate.getHours())
  }

  getTimeSpecific(hour){
    return hour > 12 ? 'PM' : 'AM';
  }

  public addMessage() {
    this.messages.unshift({
      reportero: 'Sistema',
      ciudad: 'Monterrey',
      date: this.getCurrentTime(),
      id: this.messages.length,
      read: false,
      temperatura: '25 °C'
    });
  }
}
