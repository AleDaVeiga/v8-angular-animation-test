import { Component, OnInit, AfterViewInit } from '@angular/core';

import { fade } from './animations';
import { Hero } from './hero/hero';
import { HeroService } from './hero/hero.service';
import { Villain } from './hero/villain';
import { VillainService } from './hero/villain.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fade]
})
export class AppComponent {
  state = 'inactive';
  times = 5;
  counter = 0;

  heroes: Hero[];
  villains: Villain[];

  constructor(
    private heroService: HeroService,
    private villainService: VillainService
  ) {
    this.heroes = heroService.heroes;
    this.villains = villainService.villains;
  }

  onDone($event) {
    // call this function at the end of the animation.
    if (this.counter < this.times) {
      this.state = this.state === 'active' ? 'inactive' : 'active';
      this.counter++;
    }
  }
}
