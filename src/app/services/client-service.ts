import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClient } from '../models/Client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private httpClient = inject(HttpClient);
  private apiUrl = "http://localhost:8083/api/clients";
  getClients(): Observable<IClient[]> {
    return this.httpClient.get<IClient[]>(this.apiUrl);
  }
  addClient(client: IClient): Observable<IClient> {
    return this.httpClient.post<IClient>(this.apiUrl, client);
  }
  updateClient(client: IClient): Observable<IClient> {
    return this.httpClient.put<IClient>(`${this.apiUrl}/${client.id}`, client);
  }
  deleteClient(id: number): Observable<IClient> {
    return this.httpClient.delete<IClient>(`${this.apiUrl}/${id}`);
  }
}
