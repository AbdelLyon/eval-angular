import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Statistique } from '../models/statistique';
import { StatistiqueService } from '../statistique.service';

@Component({
  selector: 'app-create-stat',
  templateUrl: './create-stat.component.html',
  styleUrls: ['./create-stat.component.css']
})
export class CreateStatComponent implements OnInit {

  constructor(private statService: StatistiqueService, private router: Router) { }

  onSubmit($e: NgForm) {

    this.statService.stats.push(new Statistique($e.value.id, $e.value.titre, $e.value.valeur))
    this.router.navigate(['/list'])
  }

  ngOnInit(): void { }

}
