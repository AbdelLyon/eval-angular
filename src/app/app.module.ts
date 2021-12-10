import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { ListComponent } from './list/list.component';
import { CreateStatComponent } from './create-stat/create-stat.component';

@NgModule({
  declarations: [
    AppComponent,
    StatistiqueComponent,
    ListComponent,
    CreateStatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
