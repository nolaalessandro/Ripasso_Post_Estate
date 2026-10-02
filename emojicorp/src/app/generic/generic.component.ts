import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Emoji } from '../emoji';

@Component({
  selector: 'app-generic',
  imports: [],
  templateUrl: './generic.component.html',
  styleUrl: './generic.component.css'
})
export class GenericComponent {
  items: Emoji[] = [];
  title = '';

  animals: Emoji[] = [
    { name: 'Cane', emoji: '🐶' },
    { name: 'Gatto', emoji: '🐱' },
    { name: 'Leone', emoji: '🦁' },
  ];
  fruits: Emoji[] = [
    { name: 'Mela', emoji: '🍎' },
    { name: 'Banana', emoji: '🍌' },
    { name: 'Uva', emoji: '🍇' },
  ];

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    const id = params.get('id');
    if (id === 'animals') {
      this.items = this.animals;
      this.title = 'Animali';
    } else if (id === 'fruits') {
      this.items = this.fruits;
      this.title = 'Frutta';
    } else {
      this.items = [];
      this.title = 'Sezione non trovata';
    }
  };
}