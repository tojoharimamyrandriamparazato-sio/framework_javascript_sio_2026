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
}
