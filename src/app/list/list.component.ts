import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statistique } from '../models/statistique';
import { StatistiqueService } from '../statistique.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public stats: Statistique[] = [];
  @Output() eventEmitter: EventEmitter<Statistique> = new EventEmitter()

  constructor(private statistiqueService: StatistiqueService) {
    this.stats = this.statistiqueService.stats

  }


  onDelete(stat: Statistique) {
    this.statistiqueService.stats.splice(this.statistiqueService.stats.indexOf(stat), 1)
  }

  clickEvent(stat: Statistique) {
    this.onDelete(stat)
  }


  ngOnInit(): void { }

}
