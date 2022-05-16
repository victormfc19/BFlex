import { Component, OnInit } from '@angular/core';
import { ReservaModel } from 'src/app/models/reserva.model';
import { RespuestaReservasModel } from 'src/app/models/respuestaListaReservas';
import { ReservasService } from 'src/app/services/reservas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaDeReservas: ReservaModel[];
  mostrarMensajeListaVacia: boolean;

  constructor(private readonly reservasService: ReservasService, public readonly router: Router) {
    this.listaDeReservas = [];
  }

  ngOnInit(): void {
    this.obtenerListaReservas();
  }

  obtenerListaReservas() {
    this.reservasService.obtenerListaDeReservas("juanariah").subscribe((lista: RespuestaReservasModel) => {
      console.log(lista);
      this.listaDeReservas = lista.respuesta;
      this.mostrarMensajeListaVacia = (this.listaDeReservas.length === 0);
    })
  }

  reservar(): void {
    this.router.navigate(['reservar'])
  }

}
