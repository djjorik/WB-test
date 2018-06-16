import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import DataSource from 'devextreme/data/data_source';
import { map } from 'rxjs/operators';
import { delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  constructor(private http: HttpClient) { }

  getProcess() {
    return this.http.get('assets/process.json').pipe(
      delay(1000)
    );
  }

  getOneProcess(name) {
    return this.getProcess().pipe(
      map((process: any) => process.find(item => item.name === name))
    );
  }

}
