import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  activarMsj:boolean=false;
  formulario1:FormGroup
  constructor(public FormB:FormBuilder) {
    this.formulario1=this.FormB.group({
      nombre: ["",Validators.required],
      contraseña:["",Validators.required],
    })
  }

  ngOnInit(): void {
  }
  validacion(){
    console.log(this.formulario1.get("nombre")?.value);
    console.log(this.formulario1.get("contraseña")?.value);
    this.activarMsj=true
  }
}
