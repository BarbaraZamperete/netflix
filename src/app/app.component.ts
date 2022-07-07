import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuOpened = false

  listTitles = [{
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia 1',
    relevance: 98,
    parts: 2,
    age: 12,
    categories: ['Épico', 'Filme de fantasia', 'Viagem no espaço']
  },
  {
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia 2',
    relevance: 87,
    parts: 2,
    age: 0,
    categories: ['Épico', 'Filme de fantasia', 'Viagem no espaço']
  },
  {
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia 3',
    relevance: 85,
    parts: 2,
    age: 14,
    categories: ['Épico', 'Filme de fantasia', 'Viagem no espaço']
  },
  {
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia 4',
    relevance: 70,
    parts: 3,
    age: 18,
    categories: ['Épico', 'Filme de fantasia', 'Viagem no espaço']
  }]

  setMenuState(state: boolean){
    this.menuOpened = state
  }

  closeMenu(){
    this.menuOpened = false;
  }
}
