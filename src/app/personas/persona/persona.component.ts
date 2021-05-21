import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../shared/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {


  constructor(public service: PersonaService) { }

  gender = [
    { id: 0, value: 'Hombre' },
    { id: 1, value: 'Mujer' },
    { id: 2, value: 'Otro' },
    { id: 0, value: 'No Especificado' }
  ];


  ngOnInit(): void {
  }

  onCancel() {
    this.service.form.reset();
  }


  onClickSubmit(data:any) {
    alert('La última persona ha añadido los siguientes datos: ' + 
    ' \nNombre: ' + data.name +
    ' \nApellido: ' + data.surname +
    ' \nEdad: ' + data.age +
    ' \nDNI: ' + data.id +
    ' \nColor Favorito: ' + data.favoriteColor +
    ' \nSexo: ' + data.gender +
    ' \nFecha de nacimiento: ' + data.birthday);
  }

}
