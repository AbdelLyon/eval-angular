import { Component, Input, OnInit } from '@angular/core';
import { Statistique } from './models/statistique';
import { StatistiqueService } from './statistique.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public stat!: Statistique;
  public stats: Statistique[] = [];


  constructor(private statistiqueService: StatistiqueService) {
    this.stats = this.statistiqueService.stats
  }

  ngOnInit() { }

}
