import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-input-message',
  templateUrl: './input-message.page.html',
  styleUrls: ['./input-message.page.scss'],
})
export class InputMessagePage implements OnInit {
  message: Message;
  datosForm: FormGroup;
  mensajesValidacion = {
    datos: [
      {type:"required", message: "Por favor llene el dato completo."},
      {type:"pattern", message: "Por favor use carácteres válidos."},
    ]
  }
  constructor(private formBuilder: FormBuilder, private data: DataService, private router: Router) {
    this.datosForm = this.formBuilder.group({
      reportero: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$")
      ])),
      ciudad: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$")

      ])),
      temperatura: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ]))
    })
   }

  ngOnInit() {
  }

  ingresarDatos(datos){
    this.data.addMessageInput(datos);
    this.router.navigateByUrl("/")
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

}
