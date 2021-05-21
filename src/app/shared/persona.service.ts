import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('',  Validators.max(125)),
    id: new FormControl('', [Validators.minLength(9), Validators.maxLength(9)]),
    birthday: new FormControl(''),
    favoriteColor: new FormControl('', Validators.minLength(3)),
    gender: new FormControl('3'),
  });
}
