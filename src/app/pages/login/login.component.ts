import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
  }

  onSubmit(){
    let user = this.usuario.username;
    if(user != null){
      if(user == 'vmflorez' || user == 'juanariah'){
        this.router.navigate(['home'])
      } else {
        alert('Error al iniciar sesion')
      }
    } else{
      alert('Error al iniciar sesion')
    }
  }
}
