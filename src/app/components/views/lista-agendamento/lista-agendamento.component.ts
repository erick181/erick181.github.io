import { Component } from '@angular/core';
import { AgendamentoService } from '../../../services/agendamento.service'; 
import { Agendamento } from '../../../models/Agendamento';

@Component({
  selector: 'app-lista-agendamento',
  standalone: true,
  imports: [],
  templateUrl: './lista-agendamento.component.html',
  styleUrl: './lista-agendamento.component.css'
})
export class ListaAgendamentoComponent {

agendamento: Agendamento = {
  Status: '',
  CodigoProgramacao: '',
  Sucesso: '',
  CodigoErro: '',
  MensagemErro: '',
  HoraExecucao: ''
}

  constructor(
    private agendamentoService: AgendamentoService
  ) { 
    this.lista();
  }

  lista():any{

    this.agendamentoService.listaAgendamento().subscribe(
      resposta => {
        this.agendamento = resposta;
        console.log(this.agendamento);
      });
  
    }

}
