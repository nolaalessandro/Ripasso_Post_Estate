import { Component } from '@angular/core';

@Component({
  selector: 'app-fruits',
  imports: [],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.css'
})
export class FruitsComponent {
  fruits = [
    { name: 'Mela', emoji: '🍎' },
    { name: 'Banana', emoji: '🍌' },
    { name: 'Uva', emoji: '🍇' },
    { name: 'Fragola', emoji: '🍓' },
  ];
}