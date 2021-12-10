import { Component, OnInit } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public stat!: Statistique;
  public stats: Statistique[] = [];


  ngOnInit() {
    this.stats = [new Statistique('fa1f5f40-be3b-11eb-91ec-7f5875ecfb46', 'Démographie en France', '60M'),
    new Statistique('fa1f5f40-be3b-11eb-91ec-7f5875ecfb47', 'Démographie Du Maroc', '43M')];
    console.log(this.stats);


  }

}
