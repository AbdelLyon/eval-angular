import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  @Input() public stats!: Statistique;
  @Output() eventEmitter: EventEmitter<Statistique> = new EventEmitter()


  constructor() { }


  onDelete(stat: Statistique) {
    this.eventEmitter.emit(stat)
  }

  ngOnInit(): void { }

}
