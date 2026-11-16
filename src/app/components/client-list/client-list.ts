import { Component, inject, OnInit, signal } from '@angular/core';
import { IClient } from '../../models/Client';
import { ClientService } from '../../services/client-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-list',
  imports: [FormsModule],
  templateUrl: './client-list.html',
  styleUrl: './client-list.scss',
})
export class ClientList implements OnInit {
  isEdit = signal<boolean>(false);
  emptyClient(): IClient {
    return {
      id: 0,
      nom: "",
      prenom: "",
      email: "",
      telephone: ""
    }
  }
  form = this.emptyClient();
  clients = signal<IClient[]>([]);
  private clientService = inject(ClientService);
  loadClients(): void {
    this.clientService.getClients().subscribe({
      next: (data) => {
        this.clients.set(data);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  ngOnInit(): void {
    this.loadClients();
  }
  onSubmit() {
    if(this.isEdit()) {
      this.clientService.updateClient(this.form).subscribe({
        next: (data) => {
          this.cancelEdit();
          this.loadClients();
        },
        error: (err) => {
          console.error(err);
        }
      });
    } else {
      this.clientService.addClient(this.form).subscribe({
        next: (data) => {
          this.cancelEdit();
          this.loadClients();
        }
      });
    }
  }
  cancelEdit() {
    this.form = this.emptyClient();
    this.isEdit.set(false);
  }
  editClient(client: IClient) {
    this.form = {...client};
    this.isEdit.set(true);
  }
  deleteClient(id: number) {
    if(!confirm("Vous êtes sur de supprimer le client " + id + " ???")) return;
    this.clientService.deleteClient(id).subscribe({
      next: (data) => {
        console.log(data);
        this.loadClients();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
