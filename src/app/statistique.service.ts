import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Statistique } from './models/statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  public stats: Statistique[] = []

  constructor(private http: HttpClient) {
    this.login()
  }

  login() {
    this.http.get(' https://stats.naminilamy.fr').toPromise().then(res => {
      for (const r of res as any) {
        this.stats.push(new Statistique(r.id, r.title, r.valeur))
      }
    }, err => console.log(err))
  }
}
