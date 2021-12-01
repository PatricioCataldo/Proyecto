import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  activarMsj1:boolean=false;
  formulario2:FormGroup
  constructor(public FormB:FormBuilder) {
    this.formulario2=this.FormB.group({
      nombre: ["",Validators.required],
      email:["",Validators.required],
      contraseña:["",Validators.required],
    })
  }

  ngOnInit(): void {
  }
  validacion(){
    console.log(this.formulario2.get("nombre")?.value);
    console.log(this.formulario2.get("email")?.value);
    console.log(this.formulario2.get("contraseña")?.value);
    this.activarMsj1=true
  }
}