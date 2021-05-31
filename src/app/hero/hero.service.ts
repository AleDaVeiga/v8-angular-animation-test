import { Injectable } from '@angular/core';
import { Hero } from './hero';

const ALL_HEROES = [
  'Windstorm',
  'RubberMan',
  'Bombasto',
  'Magneta',
  'Dynama',
  'Narco',
  'Celeritas',
  'Dr IQ',
  'Magma',
  'Tornado',
  'Mr. Nice'
].map(name => new Hero(name));

@Injectable()
export class HeroService {
  heroes: Hero[] = [];

  canAdd() {
    return this.heroes.length < ALL_HEROES.length;
  }

  canRemove() {
    return this.heroes.length > 0;
  }

  add(active = true) {
    let hero = ALL_HEROES[this.heroes.length];
    this.heroes.push(hero);
  }

  remove() {
    this.heroes.length -= 1;
  }
}
