import { Injectable } from '@angular/core';
import { Statistique } from './models/statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  public stats: Statistique[] = []

  constructor() {

    this.stats = [new Statistique('fa1f5f40-be3b-11eb-91ec-7f5875ecfb46', 'Démographie en France', '60M'),
    new Statistique('fa1f5f40-be3b-11eb-91ec-7f5875ecfb47', 'Démographie Du Maroc', '43M')];
    setTimeout(() => {
      this.stats.push(new Statistique('fa1f5f40-be3b-11eb-91ec-7f5875ecfb48', 'Altitude de la france', '9.82822M'))
    }, 2000)

  }
}
