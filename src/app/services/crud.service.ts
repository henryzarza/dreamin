import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CrudService {

  private url = 'assets/mock-data/';

  constructor(private http: HttpClient) { }

  get(request: string) {
    return this.http.get(this.url + request).map((data) => data);
  }

}
