import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ListaAgendamentoComponent } from './components/views/lista-agendamento/lista-agendamento.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaAgendamentoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teste-api-posto';
}
