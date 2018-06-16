import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class HostsService {

  constructor(private http: HttpClient) { }

  getHosts() {
    return this.http.get('assets/hosts.json').pipe(delay(1000));
  }

}
