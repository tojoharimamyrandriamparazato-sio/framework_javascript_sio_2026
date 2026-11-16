import { Component, inject, OnInit, signal } from '@angular/core';
import { IClient } from '../../models/Client';
import { ClientService } from '../../services/client-service';

@Component({
  selector: 'app-client-list',
  imports: [],
  templateUrl: './client-list.html',
  styleUrl: './client-list.scss',
})
export class ClientList implements OnInit {
  clients = signal<IClient[]>([]);
  private clientService = inject(ClientService);
  ngOnInit(): void {
    this.clientService.getClients().subscribe({
      next: (data) => {
        this.clients.set(data);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
