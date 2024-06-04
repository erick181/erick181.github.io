import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agendamento } from '../models/Agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

private url:string =  'https://apitruckcentertgl1.santosbrasil.com.br/AutoloadPatioExternoAPI/api/ConsultarAgendamento/0323250716';


  constructor(
    private http: HttpClient
  ) { }


  listaAgendamento(): Observable<Agendamento>{

    return this.http.get<Agendamento>(this.url);

  }

}
